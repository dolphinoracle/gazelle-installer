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

#include "ui_memain.h"

class MMain : public QDialog, public Ui::MeMain {
    Q_OBJECT

public:
    MMain(QStringList args);
    ~MMain();

    QString PROJECTNAME;
    QString PROJECTVERSION;
    QString PROJECTSHORTNAME;

    void setHelpText(const QString &text);
    void closeEvent(QCloseEvent * e);
    static QString getCmdOut(QString cmd);

public slots:
    virtual void closeClicked();
    virtual void showEvent(QShowEvent *);
    virtual void resizeEvent(QResizeEvent *);
};


