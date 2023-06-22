/***************************************************************************
 * PassEdit class - QLineEdit operating as a pair for editing passwords.
 *
 *   Copyright (C) 2021 by AK-47
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
 *
 * This file is part of the gazelle-installer.
 ***************************************************************************/
#ifndef PASSEDIT_H
#define PASSEDIT_H

#include <QLineEdit>

class PassEdit : public QObject
{
    Q_OBJECT
private:
    QLineEdit *master = nullptr;
    QLineEdit *slave = nullptr;
    QString genText;
    int min, genMin, wordMax;
    bool lastValid = false;
    QAction *actionEye = nullptr;
    QAction *actionGauge = nullptr;
    void generate() noexcept;
    void masterContextMenu(const QPoint &pos) noexcept;
    void masterTextChanged(const QString &text) noexcept;
    void slaveTextChanged(const QString &text) noexcept;
    void eyeToggled(bool checked) noexcept;
    bool eventFilter(QObject *watched, QEvent *event) noexcept;
public:
    PassEdit(QLineEdit *master, QLineEdit *slave,
        int min=0, int genMin=16, int wordMax=5, QObject *parent = nullptr) noexcept;
    bool isValid() const noexcept;
signals:
    void validationChanged(bool valid);
};

#endif // PASSEDIT_H
