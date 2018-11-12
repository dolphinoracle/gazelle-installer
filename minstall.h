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

#include <QFile>
#include <QMessageBox>
#include <QProcess>
#include <QTimer>
#include <QProgressDialog>

#include <sys/stat.h>
#include <sys/swap.h>
#include <unistd.h>
#include <dirent.h>

#include "ui_meinstall.h"
#include "cmd.h"

class MInstall : public QWidget, public Ui::MeInstall {
    Q_OBJECT
protected:
    QProcess *proc;
    QTimer *timer;
    QProgressBar *bar;
    QDialog *mmn;
    void keyPressEvent(QKeyEvent* event);

public:
    /** constructor */
    MInstall(QWidget* parent=0, QStringList args = QStringList());
    /** destructor */
    ~MInstall();

    bool abortInstall;

    int removedItemIndex;
    QString removedItem;
    QStringList args;

    void goBack(QString msg);
    void unmountGoBack(QString msg);

    // helpers
    static QString getCmdOut(QString cmd);
    static QStringList getCmdOuts(QString cmd);
    static QString getCmdValue(QString cmd, QString key, QString keydel, QString valdel);
    static QStringList getCmdValues(QString cmd, QString key, QString keydel, QString valdel);
    bool replaceStringInFile(QString oldtext, QString newtext, QString filepath);
    static int command(const QString &string);
    static int getPartitionNumber();
    int runCmd(QString cmd);

    bool is32bit();
    bool is64bit();
    bool isInsideVB();
    bool isGpt(QString drv);
    bool isUefi();

    void buildServiceList();
    void copyLinux();
    void installLinux();
    void prepareToInstall();
    void setLocale();
    void setServices();
    void updatePartitionWidgets();
    void updateStatus(QString msg, int val);
    bool checkDisk();
    bool installLoader();
    bool makeChosenPartitions();
    bool makeDefaultPartitions();
    bool makeFloppy();
    bool makeGrub(int rootdev, QString rootpart, const char *rootmnt, bool initrd);
    bool makeLinuxPartition(QString dev, const char *type, bool bad, QString label);
    bool makeLuksPartitions(const QString &rootdev, const QString &swapdev, const QByteArray &password);
    bool makeSwapPartition(QString dev);
    bool makeEsp(QString drv, int size);
    bool mountPartition(const QString dev, const QString point, const QString mntops);
    bool removeKernel();
    bool setComputerName();
    bool setPasswords();
    bool setUserInfo();
    bool setUserName();

    bool INSTALL_FROM_ROOT_DEVICE;
    bool POPULATE_MEDIA_MOUNTPOINTS;

    QString getPartType(const QString dev);
    QString PROJECTNAME;
    QString PROJECTVERSION;
    QString PROJECTSHORTNAME;
    QString PROJECTURL;
    QString PROJECTFORUM;
    QString MIN_ROOT_DEVICE_SIZE;
    QString DEFAULT_HOSTNAME;
    QString MIN_INSTALL_SIZE;
    QString PREFERRED_MIN_INSTALL_SIZE;
    QStringList ENABLE_SERVICES;

    // global for now until boot combo box is sorted out
    QString bootdev;
    QString swapdevicepreserve;

    void setupkeyboardbutton();
    void gotoPage(int next);
    void pageDisplayed(int next);
    int showPage(int curr, int next);
    void stopInstall();
    void firstRefresh(QDialog *main);
    void refresh();

public slots:
    virtual void on_passwordCheckBox_stateChanged(int);
    virtual void on_nextButton_clicked();
    virtual void on_backButton_clicked();
    virtual void on_abortInstallButton_clicked();
    virtual void on_qtpartedButton_clicked();
    virtual void on_diskCombo_activated(QString item = "");
    virtual void on_rootCombo_activated(QString item = "");
    virtual void on_rootTypeCombo_activated(QString item = "");
    void procAbort();
    virtual bool close();
    //    void moreClicked(QListViewItem *item);
    void delStart();
    void delDone(int, QProcess::ExitStatus exitStatus);
    void delTime();

    void copyStart();
    void copyDone(int, QProcess::ExitStatus exitStatus);
    void copyTime();
    void procTime();

private slots:
    void on_viewServicesButton_clicked();
    void on_grubBootCombo_activated(QString item = "");
    void on_closeButton_clicked();
    void on_encryptCheckBox_toggled(bool checked);
    void on_saveHomeCheck_toggled(bool checked);
    void on_buttonSetKeyboard_clicked();
    void on_homeCombo_currentIndexChanged(const QString &arg1);
    void on_swapCombo_currentIndexChanged(const QString &arg1);
    void on_userPasswordEdit2_textChanged(const QString &arg1);
    void on_rootPasswordEdit2_textChanged(const QString &arg1);
    void on_userPasswordEdit_textChanged();
    void on_rootPasswordEdit_textChanged();
    void on_checkBoxEncryptAuto_toggled(bool checked);
    void on_existing_partitionsButton_clicked(bool checked);
    void on_FDEpassword_textChanged();
    void on_FDEpassword2_textChanged(const QString &arg1);
    void on_FDEpassCust_textChanged();
    void on_FDEpassCust2_textChanged(const QString &arg1);
    void on_checkBoxEncryptRoot_toggled(bool checked);
    void on_checkBoxEncryptHome_toggled(bool checked);

private:
    Cmd shell;
};
