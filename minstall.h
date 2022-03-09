/****************************************************************************
 *  Copyright (C) 2003-2010 by Warren Woodford
 *  Heavily edited, with permision, by anticapitalista for antiX 2011-2014.
 *  Heavily revised by dolphin oracle, adrian, and anticaptialista 2018.
 *  additional mount and compression oftions for btrfs by rob 2018
 *  Major GUI update and user experience improvements by AK-47 2019.
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 ****************************************************************************/

#include <QCommandLineParser>
#include <QFile>
#include <QMessageBox>
#include <QProcess>
#include <QSettings>
#include <sys/types.h>
#include <sys/stat.h>
#include <unistd.h>
#include <dirent.h>

#include "mprocess.h"
#include "msettings.h"
#include "partman.h"
#include "safecache.h"
#include "oobe.h"

#include "ui_meinstall.h"

class MInstall : public QDialog, public Ui::MeInstall {
    Q_OBJECT
protected:
    void changeEvent(QEvent *event);
    void resizeEvent(QResizeEvent *);
    void closeEvent(QCloseEvent * event);
    void reject();

public:
    MInstall(const QCommandLineParser &args, const QString &cfgfile);
    ~MInstall();

    // helpers
    static QString sliderSizeString(long long size);

    bool isInsideVB();

    bool installLoader();
    bool setUserInfo();
    void selectBootMain();
    void buildBootLists();
    void disablehiberanteinitramfs();
    bool processNextPhase();
    bool writeKeyFile();

    bool INSTALL_FROM_ROOT_DEVICE;
    bool POPULATE_MEDIA_MOUNTPOINTS;

    QString PROJECTFORUM;
    QString PROJECTNAME;
    QString PROJECTSHORTNAME;
    QString PROJECTURL;
    QString PROJECTVERSION;
    bool REMOVE_NOSPLASH;
    QString SQFILE_FULL;
    long long ROOT_BUFFER, HOME_BUFFER;

    int showPage(int curr, int next);
    void gotoPage(int next);
    void pageDisplayed(int next);
    void setupkeyboardbutton();
    bool abortUI();
    void cleanup(bool endclean = true);

private slots:
    void on_splitter_splitterMoved(int, int);
    void on_tabsMain_currentChanged(int index);

    void on_pushAbort_clicked();
    void on_pushBack_clicked();
    void on_pushSetKeyboard_clicked();
    void on_pushClose_clicked();
    void on_pushNext_clicked();
    void on_pushPartReload_clicked();
    void on_pushRunPartMan_clicked();
    void on_pushServices_clicked();

    void on_comboDisk_currentIndexChanged(int);
    void on_sliderPart_sliderPressed();
    void on_sliderPart_valueChanged(int value);
    void on_boxEncryptAuto_toggled(bool checked);
    void on_radioCustomPart_toggled(bool checked);

    void on_radioBootMBR_toggled();
    void on_radioBootPBR_toggled();
    void on_radioBootESP_toggled();

    void on_progInstall_valueChanged(int value);

private:
    MProcess proc;
    int phase = 0;

    // command line options
    bool brave, pretend, automatic, nocopy, sync;
    bool oem, mountkeep;
    // configuration management
    MSettings *config = nullptr;
    enum ConfigAction { ConfigSave, ConfigLoadA, ConfigLoadB };

    bool uefi = false;
    bool mactest = false;

    // source medium
    QStringList rootSources;
    QString bootSource;

    // auto-mount setup
    QString listMaskedMounts;
    bool autoMountEnabled = true;

    QWidget *nextFocus = nullptr;
    PartMan partman;
    Oobe oobe;
    QStringList listHomes;
    SafeCache key;

    // for the tips display
    int ixTip = 0;
    int ixTipStart = -1;
    int iLastProgress = -1;

    // info needed for Phase 2 of the process
    bool haveOldHome = false;

    // slots
    void startup();
    void diskPassValidationChanged(bool valid);
    // private functions
    void updateCursor(const Qt::CursorShape shape = Qt::ArrowCursor);
    void updatePartitionWidgets(bool all);
    void setupPartitionSlider();
    void setupAutoMount(bool enabled);
    bool pretendToInstall(int space, long steps);
    bool saveHomeBasic();
    bool installLinux();
    bool copyLinux();
    void failUI(const QString &msg);
    void manageConfig(enum ConfigAction mode);
};
