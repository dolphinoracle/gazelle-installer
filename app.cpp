//
//   Copyright (C) 2003-2009 by Warren Woodford
//   Heavily edited, with permision, by anticapitalista for antiX 2011-2014.
//   Heavily revised by dolphin oracle, adrian, and anticaptialista 2018.
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//

#include <unistd.h>

#include <QApplication>
#include <QDateTime>
#include <QFont>
#include <QString>
#include <QLocale>
#include <QLoggingCategory>
#include <QTranslator>
#include <QMessageBox>
#include <QFile>
#include <QScopedPointer>
#include <QDebug>

#include "mmain.h"

QScopedPointer<QFile> logFile;

void messageHandler(QtMsgType type, const QMessageLogContext &context, const QString &msg);
void printHelp();

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);

    if (a.arguments().contains("--help") || a.arguments().contains("-h") ) {
        printHelp();
        return 0;
    }

    a.setWindowIcon(QIcon::fromTheme("system-installer", QIcon("/usr/share/pixmaps/msystem.png")));

    // Set the logging files
    logFile.reset(new QFile("/var/log/minstall.log"));
    // Open the file logging
    logFile.data()->open(QFile::Append | QFile::Text);
    // Set handler
    qInstallMessageHandler(messageHandler);


    QTranslator qtTran;
    qtTran.load(QString("qt_") + QLocale::system().name());
    a.installTranslator(&qtTran);

    QTranslator appTran;
    appTran.load(QString("gazelle-installer_") + QLocale::system().name(), "/usr/share/gazelle-installer/locale");
    a.installTranslator(&appTran);

    //exit if "minstall" is already running
    if (system("ps -C minstall | sed '0,/minstall/{s/minstall//}' | grep minstall") == 0) {
        QMessageBox::critical(0, QString::null,
                              QApplication::tr("The installer won't launch because it appears to be running already in the background.\n\n"
                                               "Please close it if possible, or run 'pkill minstall' in terminal."));
        return 1;
    }

    // check if 32bit on 64 bit UEFI
    if (system("uname -m | grep -q i686") == 0 && system("grep -q 64 /sys/firmware/efi/fw_platform_size") == 0)
    {
        int ans = QMessageBox::question(0, QString::null, QApplication::tr("You are running 32bit OS started in 64 bit UEFI mode, the system will not be able to boot"
                                                                           " unless you select Legacy Boot or similar at restart.\n"
                                                                           "We recommend you quit now and restart in Legacy Boot\n\n"
                                                                           "Do you want to continue the installation?"),
                                    QApplication::tr("Yes"), QApplication::tr("No"));
        if (ans != 0) {
            return 1;
        }
    }

    if (getuid() == 0) {
        MMain mmain(a.arguments());
        mmain.show();
        return a.exec();
    } else {
        QApplication::beep();
        QMessageBox::critical(0, QString::null,
                              QApplication::tr("You must run this app as root."));
        return 1;
    }
}

// The implementation of the handler
void messageHandler(QtMsgType type, const QMessageLogContext &context, const QString &msg)
{
    // Write to terminal
    QTextStream term_out(stdout);
    term_out << msg << endl;

    // Open stream file writes
    QTextStream out(logFile.data());

    // Write the date of recording
    out << QDateTime::currentDateTime().toString("yyyy-MM-dd hh:mm:ss.zzz ");
    // By type determine to what level belongs message
    switch (type)
    {
    //case QtInfoMsg:     out << "INF "; break; Not in older Qt versions
    case QtDebugMsg:    out << "DBG "; break;
    case QtWarningMsg:  out << "WRN "; break;
    case QtCriticalMsg: out << "CRT "; break;
    case QtFatalMsg:    out << "FTL "; break;
    default:            out << "OTH"; break;
    }
    // Write to the output category of the message and the message itself
    out << context.category << ": "
        << msg << endl;
    out.flush();    // Clear the buffered data
}

// print CLI help info
void printHelp()
{
    qDebug() << "Here are some CLI options you can use, please read the description carefully and be aware that these are experimental options\n";
    qDebug() << "Usage: minstall [<options>]\n";
    qDebug() << "Options:";
    qDebug() << "  -p --pretend   Test mode for GUI, you can advance to different screens without actially installing";
    qDebug() << "  -s --sync      Installing with rsync instead of cp on custom partitioning\n"
                "                 -- doesn't format /root, it doesn't preserve Home, it doesn't work with encryption";
    qDebug() << "  -t --test      Another testing mode for installer, partitions/drives are going to be FORMATED, it will skip copying the files";
}

