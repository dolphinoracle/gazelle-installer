<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ja">
<context>
    <name>Base</name>
    <message>
        <location filename="../base.cpp" line="110"/>
        <source>Checking installation media.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base.cpp" line="111"/>
        <source>Press ESC to skip.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base.cpp" line="119"/>
        <source>The installation media is corrupt.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base.cpp" line="174"/>
        <source>Are you sure you want to skip checking the installation media?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../base.cpp" line="190"/>
        <source>Deleting old system</source>
        <translation>旧システムの削除中</translation>
    </message>
    <message>
        <location filename="../base.cpp" line="194"/>
        <source>Failed to delete old system on destination.</source>
        <translation>指定した場所の古いシステム情報の削除に失敗しました。</translation>
    </message>
    <message>
        <location filename="../base.cpp" line="200"/>
        <source>Creating system directories</source>
        <translation>システムディレクトリを作成中</translation>
    </message>
    <message>
        <location filename="../base.cpp" line="210"/>
        <source>Fixing configuration</source>
        <translation>設定を修復中</translation>
    </message>
    <message>
        <location filename="../base.cpp" line="222"/>
        <source>Failed to finalize encryption setup.</source>
        <translation>暗号化の設定を完了できませんでした。</translation>
    </message>
    <message>
        <location filename="../base.cpp" line="291"/>
        <source>Copying new system</source>
        <translation>新しいシステムをコピー中</translation>
    </message>
    <message>
        <location filename="../base.cpp" line="322"/>
        <source>Failed to copy the new system.</source>
        <translation>新しいシステムのコピーに失敗しました。</translation>
    </message>
</context>
<context>
    <name>BootMan</name>
    <message>
        <location filename="../bootman.cpp" line="124"/>
        <location filename="../bootman.cpp" line="233"/>
        <source>Updating initramfs</source>
        <translation>initramfs を更新中</translation>
    </message>
    <message>
        <location filename="../bootman.cpp" line="132"/>
        <source>Failed to update initramfs.</source>
        <translation>initramfs の更新に失敗しました。</translation>
    </message>
    <message>
        <location filename="../bootman.cpp" line="136"/>
        <source>Installing GRUB</source>
        <translation>GRUB のインストール中</translation>
    </message>
    <message>
        <location filename="../bootman.cpp" line="173"/>
        <source>GRUB installation failed. You can reboot to the live medium and use the GRUB Rescue menu to repair the installation.</source>
        <translation>GRUB のインストールに失敗しました。Live メディアから再起動し、GRUB Rescueメニューを使用してインストールを修復できます。</translation>
    </message>
    <message>
        <location filename="../bootman.cpp" line="262"/>
        <source>System boot disk:</source>
        <translation>システム起動ディスク:</translation>
    </message>
    <message>
        <location filename="../bootman.cpp" line="281"/>
        <location filename="../bootman.cpp" line="293"/>
        <source>Partition to use:</source>
        <translation>使用するパーティション:</translation>
    </message>
</context>
<context>
    <name>DeviceItem</name>
    <message>
        <location filename="../partman.cpp" line="1795"/>
        <source>EFI System Partition</source>
        <translation>EFI システムパーティション</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="1796"/>
        <source>swap space</source>
        <translation>スワップ領域</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="1797"/>
        <source>format only</source>
        <translation>初期化だけ行う</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="1920"/>
        <source>Create</source>
        <translation>作成</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="1923"/>
        <source>Preserve</source>
        <translation>保持</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="1924"/>
        <source>Preserve (%1)</source>
        <translation> (%1) を確保</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="1925"/>
        <source>Preserve /home (%1)</source>
        <translation>/home (%1) 保持</translation>
    </message>
</context>
<context>
    <name>DeviceItemDelegate</name>
    <message>
        <location filename="../partman.cpp" line="2361"/>
        <source>&amp;Templates</source>
        <translation>&amp;テンプレート</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="2368"/>
        <source>Compression (&amp;ZLIB)</source>
        <translation>圧縮 (&amp;ZLIB)</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="2370"/>
        <source>Compression (Z&amp;STD)</source>
        <translation>圧縮 (Z&amp;STD)</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="2372"/>
        <source>Compression (&amp;LZO)</source>
        <translation>圧縮 (&amp;LZO)</translation>
    </message>
</context>
<context>
    <name>MInstall</name>
    <message>
        <location filename="../minstall.cpp" line="69"/>
        <source>Shutdown</source>
        <translation>シャットダウン</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="137"/>
        <source>You are running 32bit OS started in 64 bit UEFI mode, the system will not be able to boot unless you select Legacy Boot or similar at restart.
We recommend you quit now and restart in Legacy Boot

Do you want to continue the installation?</source>
        <translation>32bit OS を 64bit UEFIモードで起動している場合、再起動時にレガシーブートかそれと同等なものを選択しないと起動できません。
今すぐ終了して、レガシーブートで再起動することをお勧めします。

インストールを続行しますか？</translation>
    </message>
    <message>
        <source>Cannot access installation source.</source>
        <translation type="vanished">インストールソースにアクセスできません。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="155"/>
        <source>Cannot access installation media.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="171"/>
        <source>Support %1

%1 is supported by people like you. Some help others at the support forum - %2, or translate help files into different languages, or make suggestions, write documentation, or help test new software.</source>
        <translation>&lt;p&gt;%1 のサポート

%1 はあなたのような皆さんに支えられています。サポートフォーラム %2  で他の人を助けたり、ヘルプを他の言語へ翻訳したり、あるいは提案やドュメント作成、新規ソフトウェアのテストを行うとうような支援が可能です。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="221"/>
        <source>%1 is an independent Linux distribution based on Debian Stable.

%1 uses some components from MEPIS Linux which are released under an Apache free license. Some MEPIS components have been modified for %1.

Enjoy using %1</source>
        <translation>%1 は Debian Stable をベースとした独立 Linux ディストリビューションです

%1 は、Apache フリーライセンス下で公開されている MEPIS Linux からいくつかのコンポーネントを使用しています。いくつかの MEPIS コンポーネントは、%1 用に変更されています。

%1 をお楽しみ下さい。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="357"/>
        <source>Pretending to install %1</source>
        <translation>%1 のインストールをなりすましています</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="377"/>
        <source>Preparing to install %1</source>
        <translation>%1 のインストールを準備中です</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="399"/>
        <source>Paused for required operator input</source>
        <translation>必要なオペレーター入力のため一時停止</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="410"/>
        <source>Setting system configuration</source>
        <translation>システムの設定を行っています</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="423"/>
        <source>Cleaning up</source>
        <translation>クリーニング中</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="425"/>
        <source>Finished</source>
        <translation>完了</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="520"/>
        <source>Invalid settings found in configuration file (%1). Please review marked fields as you encounter them.</source>
        <translation>設定ファイル (%1) に無効な設定値が検出されました。検出された箇所を見直してください。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="562"/>
        <source>OK to format and use the entire disk (%1) for %2?</source>
        <translation>%2 用にディスク全体 (%1) をフォーマットして利用しますか？</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="566"/>
        <source>WARNING: The selected drive has a capacity of at least 2TB and must be formatted using GPT. On some systems, a GPT-formatted disk will not boot.</source>
        <translation>警告: 選択したドライブは少なくとも 2TB の容量があるので GPT を使ってフォーマットする必要があります。いくつかのシステムでは GPT でフォーマットされたディスクは起動しません。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="593"/>
        <source>The data in /home cannot be preserved because the required information could not be obtained.</source>
        <translation>/home にあるデータは保存されません。なぜなら必要な情報を入手できないからです。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="608"/>
        <source>The home directory for %1 already exists.</source>
        <translation>%1 用の home ディレクトリはすでに存在します。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="655"/>
        <source>General Instructions</source>
        <translation>全般的な説明</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="656"/>
        <source>BEFORE PROCEEDING, CLOSE ALL OTHER APPLICATIONS.</source>
        <translation>作業を進めるには、他の全てのアプリを終了します。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="657"/>
        <source>On each page, please read the instructions, make your selections, and then click on Next when you are ready to proceed. You will be prompted for confirmation before any destructive actions are performed.</source>
        <translation>各ページで、その説明を読んでから選択し、準備が整ってから [次へ] をクリックして先へ進んでください。シムテムに悪影響を及ぼすようなアクションが実行されるときは、あなたに確認を促します。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="659"/>
        <source>Limitations</source>
        <translation>制限事項</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="660"/>
        <source>Remember, this software is provided AS-IS with no warranty what-so-ever. It is solely your responsibility to backup your data before proceeding.</source>
        <translation>このソフトウェアは現状のままで提供され、一切の保証はありません。作業を続行する前にデータをバックアップするのは全てユーザーの責任です。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="673"/>
        <source>Installation Options</source>
        <translation>インストールのオプション</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="674"/>
        <source>Installation requires about %1 of space. %2 or more is preferred.</source>
        <translation>インストールには約 %1 のスペースが必要です。%2 が望ましいです。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="675"/>
        <source>If you are running Mac OS or Windows OS (from Vista onwards), you may have to use that system&apos;s software to set up partitions and boot manager before installing.</source>
        <translation>もしあなたが Mac OS や Windows OS (Vista 以降)を稼働させているのであれば、インストールする前にそのシステム用のパーティション設定ツールや boot マネージャーを使う方が良いかもしれません。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="676"/>
        <source>Using the root-home space slider</source>
        <translation>root-home スペース・スライダーの利用</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="677"/>
        <source>The drive can be divided into separate system (root) and user data (home) partitions using the slider.</source>
        <translation>スライダを使用して、ドライブを個別のシステム (root) パーティションとユーザーデータ (home) パーティションに分割できます。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="678"/>
        <source>The &lt;b&gt;root&lt;/b&gt; partition will contain the operating system and applications.</source>
        <translation>&lt;b&gt;root&lt;/b&gt; パーティションには、オペレーティングシステムとアプリケーションが含まれます。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="679"/>
        <source>The &lt;b&gt;home&lt;/b&gt; partition will contain the data of all users, such as their settings, files, documents, pictures, music, videos, etc.</source>
        <translation>&lt;b&gt;home&lt;/b&gt; パーティションには、すべてのユーザの設定、ファイル、文書、画像、音楽、ビデオなどのデータが保存されます。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="680"/>
        <source>Move the slider to the right to increase the space for &lt;b&gt;root&lt;/b&gt;. Move it to the left to increase the space for &lt;b&gt;home&lt;/b&gt;.</source>
        <translation>スライダーを右に動かすと、&lt;b&gt;root&lt;/b&gt;の容量が増えます。左に動かすと&lt;b&gt;home&lt;/b&gt;の容量が増えます。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="681"/>
        <source>Move the slider all the way to the right if you want both root and home on the same partition.</source>
        <translation>root と home の両方を同じパーティションに配置したい場合、スライダーを右いっぱいへ動かします。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="682"/>
        <source>Keeping the home directory in a separate partition improves the reliability of operating system upgrades. It also makes backing up and recovery easier. This can also improve overall performance by constraining the system files to a defined portion of the drive.</source>
        <translation>home ディレクトリを別のパーティションにしておくと、OSのアップグレード時の信頼性が向上します。また、バックアップやリカバリーも容易になります。また、システムファイルをドライブ内の特定の場所に限定することで、全体的なパフォーマンスを向上させることができます。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="684"/>
        <location filename="../minstall.cpp" line="767"/>
        <source>Encryption</source>
        <translation>暗号化</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="685"/>
        <location filename="../minstall.cpp" line="768"/>
        <source>Encryption is possible via LUKS. A password is required.</source>
        <translation>暗号化は LUKS で行えます。パスワードが必要です。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="686"/>
        <location filename="../minstall.cpp" line="769"/>
        <source>A separate unencrypted boot partition is required.</source>
        <translation>暗号化されていない別の boot パーティションが必要です。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="687"/>
        <source>When encryption is used with autoinstall, the separate boot partition will be automatically created.</source>
        <translation>自動インストール時に暗号化を利用している場合、別の boot パーティションが自動的に生成されます。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="688"/>
        <source>Using a custom disk layout</source>
        <translation>カスタム・ディスクレイアウトの利用</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="689"/>
        <source>If you need more control over where %1 is installed to, select &quot;&lt;b&gt;%2&lt;/b&gt;&quot; and click &lt;b&gt;Next&lt;/b&gt;. On the next page, you will then be able to select and configure the storage devices and partitions you need.</source>
        <translation>%1 のインストール先をより細かく管理する必要がある場合は、&lt;b&gt;%2&lt;/b&gt; を選択して &lt;b&gt;次へ&lt;/b&gt; をクリックします。次のページでは、必要なストレージデバイスとパーティションを選択して構成することができます。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="703"/>
        <source>Choose Partitions</source>
        <translation>パーティションを選択</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="704"/>
        <source>The partition list allows you to choose what partitions are used for this installation.</source>
        <translation>パーティションリストから、このインストールで使用するパーティションを選択することができます。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="705"/>
        <source>&lt;i&gt;Device&lt;/i&gt; - This is the block device name that is, or will be, assigned to the created partition.</source>
        <translation>&lt;i&gt;デバイス&lt;/i&gt; - これは作成されたパーティションに割り当てられている、または割り当てられる予定のブロックデバイス名です。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="706"/>
        <source>&lt;i&gt;Size&lt;/i&gt; - The size of the partition. This can only be changed on a new layout.</source>
        <translation>&lt;i&gt;サイズ&lt;/i&gt; - パーティションのサイズです。これは、新しいレイアウトでのみ変更できます。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="707"/>
        <source>&lt;i&gt;Use For&lt;/i&gt; - To use this partition in an installation, you must select something here.</source>
        <translation>&lt;i&gt;Use For&lt;/i&gt; - インストールでこのパーティションを使用するには、ここで何かを選択する必要があります。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="708"/>
        <source>Format - Format without mounting.</source>
        <translation>Format - マウントせずにフォーマットします。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="709"/>
        <source>BIOS-GRUB - BIOS Boot GPT partition for GRUB.</source>
        <translation>BIOS-GRUB - GRUB 用の BIOS Boot GPT パーティション。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="710"/>
        <source>EFI - EFI System Partition.</source>
        <translation>EFI - EFI システムパーティション。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="711"/>
        <source>boot - Boot manager (/boot).</source>
        <translation>boot - ブートマネージャ (/boot).</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="712"/>
        <source>root - System root (/).</source>
        <translation>root - システムルート (/).</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="713"/>
        <source>swap - Swap space.</source>
        <translation>swap - スワップ領域。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="714"/>
        <source>home - User data (/home).</source>
        <translation>home - ユーザーデータ (/home)。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="715"/>
        <source>In addition to the above, you can also type your own mount point. Custom mount points must start with a slash (&quot;/&quot;).</source>
        <translation>上記に加えて、独自のマウントポイントを入力することもできます。カスタム・マウントポイントはスラッシュ (&quot;/&quot;) で始める必要があります。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="716"/>
        <source>The installer treats &quot;/boot&quot;, &quot;/&quot;, and &quot;/home&quot; exactly the same as &quot;boot&quot;, &quot;root&quot;, and &quot;home&quot;, respectively.</source>
        <translation>インストーラは、&quot;/boot&quot;、&quot;/&quot;、&quot;/home&quot; をそれぞれ &quot;boot&quot;、&quot;root&quot;、&quot;home&quot; とまったく同じものとして扱います。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="717"/>
        <source>&lt;i&gt;Label&lt;/i&gt; - The label that is assigned to the partition once it has been formatted.</source>
        <translation>&lt;i&gt;ラベル&lt;/i&gt; - パーティションがフォーマットされた後に割り当てられるラベルです。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="718"/>
        <source>&lt;i&gt;Encrypt&lt;/i&gt; - Use LUKS encryption for this partition. The password applies to all partitions selected for encryption.</source>
        <translation>&lt;i&gt;Encrypt&lt;/i&gt; - このパーティションにはLUKS暗号化を使用します。パスワードは、暗号化用に選択されたすべてのパーティションに適用されます。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="719"/>
        <source>&lt;i&gt;Format&lt;/i&gt; - This is the partition&apos;s format. Available formats depend on what the partition is used for. When working with an existing layout, you may be able to preserve the format of the partition by selecting &lt;b&gt;Preserve&lt;/b&gt;.</source>
        <translation>&lt;i&gt;フォーマット&lt;/i&gt; - これはパーティションのフォーマットです。利用可能なフォーマットは、パーティションの使用目的によって異なります。既存のレイアウトで作業する場合、&lt;b&gt;保存&lt;/b&gt; を選択することで、そのパーティションのフォーマットを維持できる場合があります。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="721"/>
        <source>Selecting &lt;b&gt;Preserve /home&lt;/b&gt; for the root partition preserves the contents of the /home directory, deleting everything else. This option can only be used when /home is on the same partition as the root.</source>
        <translation>root パーティションで &lt;b&gt;Preserve /home&lt;/b&gt; を選択すると、/home ディレクトリの内容が保存され、その他はすべて削除されます。このオプションは、/home が root と同じパーティションに存在する場合にのみ使用できます。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="723"/>
        <source>The ext2, ext3, ext4, jfs, xfs and btrfs Linux filesystems are supported and ext4 is recommended.</source>
        <translation>ext2、ext3、 ext4、 jfs、 xfs、 btrfs の Linux ファイルシステムをサポートしますが、 ext4 システムをお推めします。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="724"/>
        <source>&lt;i&gt;Check&lt;/i&gt; - Check and correct for bad blocks on the drive (not supported for all formats). This is very time consuming, so you may want to skip this step unless you suspect that your drive has bad blocks.</source>
        <translation>&lt;i&gt;チェック&lt;/i&gt; - ドライブ上の不正なブロックをチェックして修正します (すべてのフォーマットでサポートされているわけではありません)。これは非常に時間がかかるので、ドライブに不正なブロックがあると思われない限り、この手順は省略可能です。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="726"/>
        <source>&lt;i&gt;Mount Options&lt;/i&gt; - This specifies mounting options that will be used for this partition.</source>
        <translation>&lt;i&gt;マウントオプション&lt;/i&gt; - このパーティションで使用するマウントオプションを指定します。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="727"/>
        <source>&lt;i&gt;Dump&lt;/i&gt; - Instructs the dump utility to include this partition in the backup.</source>
        <translation>&lt;i&gt;Dump&lt;/i&gt; - このパーティションをバックアップに含めるように、Dump ユーティリティに指示します。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="728"/>
        <source>&lt;i&gt;Pass&lt;/i&gt; - The sequence in which this file system is to be checked at boot. If zero, the file system is not checked.</source>
        <translation>&lt;i&gt;Pass&lt;/i&gt; - このファイルシステムが起動時にチェックされる順序です。0 の場合、ファイルシステムはチェックされません。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="729"/>
        <source>Menus and actions</source>
        <translation>メニューと操作</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="730"/>
        <source>A variety of actions are available by right-clicking any drive or partition item in the list.</source>
        <translation>リスト内のドライブやパーティションの項目を右クリックすると、様々な操作が可能です。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="731"/>
        <source>The buttons to the right of the list can also be used to manipulate the entries.</source>
        <translation>リストの右側にあるボタンを使っても、エントリーを操作することもできます。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="732"/>
        <source>The installer cannot modify the layout already on the drive. To create a custom layout, mark the drive for a new layout with the &lt;b&gt;New layout&lt;/b&gt; menu action or button (%1). This clears the existing layout.</source>
        <translation>インストーラは、ドライブ上の既存レイアウトを変更することはできません。カスタム・レイアウトを作成するには、&lt;b&gt;新規レイアウト&lt;/b&gt; メニュー・アクションまたはボタン (%1) でドライブを新規レイアウト用にマークします。これにより、既存レイアウトが消去されます。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="735"/>
        <source>Basic layout requirements</source>
        <translation>基本的なレイアウト要件</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="736"/>
        <source>%1 requires a root partition. The swap partition is optional but highly recommended. If you want to use the Suspend-to-Disk feature of %1, you will need a swap partition that is larger than your physical memory size.</source>
        <translation>%1 には root パーティションが必要です。 swap パーティションは任意ですが強く推奨します。 Suspend-to-Disk という機能をfeature of %1 という Suspend-to-Disk 機能を利用するには、物理的メモリの容量以上の swap パーティションが必要となります。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="738"/>
        <source>If you choose a separate /home partition it will be easier for you to upgrade in the future, but this will not be possible if you are upgrading from an installation that does not have a separate home partition.</source>
        <translation>独立した /home パーティションを選択すると、将来のアップグレードが容易になりますが、独立した home パーティションを有しないインストールからアップグレードする場合には、これは不可能になります。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="740"/>
        <source>Active partition</source>
        <translation>アクティブパーティション</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="741"/>
        <source>For the installed operating system to boot, the appropriate partition (usually the boot or root partition) must be the marked as active.</source>
        <translation>インストールされたオペレーティングシステムを起動するには、適切なパーティション (通常は boot パーティションまたは root パーティション) がアクティブとしてマークされている必要があります。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="742"/>
        <source>The active partition of a drive can be chosen using the &lt;b&gt;Active partition&lt;/b&gt; menu action.</source>
        <translation>ドライブのアクティブパーティションは、&lt;b&gt;アクティブパーティション&lt;/b&gt;のメニューアクションを使用して選択できます。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="743"/>
        <source>A partition with an asterisk (*) next to its device name is, or will become, the active partition.</source>
        <translation>デバイス名の横にアスタリスク (*) が付いているパーティションは、現在アクティブパーティション、もしくは今後アクティブパーティションになります。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="744"/>
        <source>Boot partition</source>
        <translation>Boot パーティション</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="745"/>
        <source>This partition is generally only required for root partitions on virtual devices such as encrypted, LVM or software RAID volumes.</source>
        <translation>このパーティションは通常、暗号化された LVM ボリュームやソフトウェア RAID ボリュームなどの、仮想デバイス上の root パーティションにのみ必要です。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="746"/>
        <source>It contains a basic kernel and drivers used to access the encrypted disk or virtual devices.</source>
        <translation>暗号化されたディスクや仮想デバイスにアクセスするための、基本カーネルとドライバが含まれています。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="747"/>
        <source>BIOS-GRUB partition</source>
        <translation>BIOS-GRUB パーティション</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="748"/>
        <source>When using a GPT-formatted drive on a non-EFI system, a 1MB BIOS boot partition is required when using GRUB.</source>
        <translation>GPT フォーマットのドライブを非 EFI システムで使用する場合、GRUB を使用時に 1MB の BIOS ブートパーティションが必要です。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="749"/>
        <source>New drives are formatted in GPT if more than 4 partitions are to be created, or the drive has a capacity greater than 2TB. If the installer is about to format the disk in GPT, and there is no BIOS-GRUB partition, a warning will be displayed before the installation starts.</source>
        <translation>新しいドライブは、4 つ以上のパーティションを作成する場合や、ドライブの容量が 2TB を超える場合は、GPT で初期化されます。インストーラがディスクを GPT で初期化しようとしている時、BIOS-GRUB パーティションが存在しない場合、インストール開始前に警告が表示されます。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="751"/>
        <source>Need help creating a layout?</source>
        <translation>レイアウト作成でお困りですか？</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="752"/>
        <source>Just right-click on a drive to bring up a menu, and select a layout template. These layouts are similar to that of the regular install.</source>
        <translation>ドライブを右クリックしてメニューを表示させ、レイアウトテンプレートを選択するだけです。これらのレイアウトは、通常のインストールの場合と同じです。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="753"/>
        <source>&lt;i&gt;Standard install&lt;/i&gt; - Suited to most setups. This template does not add a separate boot partition, and so it is unsuitable for use with an encrypted operating system.</source>
        <translation>&lt;i&gt;標準インストール&lt;/i&gt; - ほとんどのセットアップに適しています。このテンプレートは、独立したブートパーティションを追加しないため、暗号化されたOSでの使用には適していません。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="754"/>
        <source>&lt;i&gt;Encrypted system&lt;/i&gt; - Contains the boot partition required to load an encrypted operating system. This template can also be used as the basis for a multi-boot system.</source>
        <translation>&lt;i&gt;暗号化システム&lt;/i&gt; - 暗号化されたオペレーティングシステムをロードするために必要なブートパーティションを含みます。このテンプレートは、マルチブートシステムのベースとしても使用できます。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="755"/>
        <source>Upgrading</source>
        <translation>アップグレード中</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="756"/>
        <source>To upgrade from an existing Linux installation, select the same home partition as before and select &lt;b&gt;Preserve&lt;/b&gt; as the format.</source>
        <translation>既存の Linux インストールからアップグレードするには、以前と同じホームパーティションを選択し、フォーマットとして&lt;b&gt;保持&lt;/b&gt;を選択します。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="757"/>
        <source>If you do not use a separate home partition, select &lt;b&gt;Preserve /home&lt;/b&gt; on the root file system entry to preserve the existing /home directory located on your root partition. The installer will only preserve /home, and will delete everything else. As a result, the installation will take much longer than usual.</source>
        <translation>個別の home パーティションを使用しない場合は、root ファイルシステムのエントリで &lt;b&gt;/home の保持&lt;/b&gt;を選択して、root パーティションにある既存の /home ディレクトリを保持します。インストーラは /home だけを保持し、それ以外はすべて削除します。その結果、インストールには通常の場合よりもずっと時間がかかります。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="759"/>
        <source>Preferred Filesystem Type</source>
        <translation> 優先するファイルシステムのタイプ</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="760"/>
        <source>For %1, you may choose to format the partitions as ext2, ext3, ext4, f2fs, jfs, xfs or btrfs.</source>
        <translation>%1 については、フォーマットするパーティションの形式を ext2、ext3、 ext4、 f2fs、 jfs、 xfs、 btrfs の中から選択することが可能です。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="761"/>
        <source>Additional compression options are available for drives using btrfs. Lzo is fast, but the compression is lower. Zlib is slower, with higher compression.</source>
        <translation>btrfs を使用するドライブでは、追加の圧縮オプションを使用できます。 Lzo は高速ですが圧縮率は低くなります。 Zlib は低速ですが圧縮率が高くなります。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="763"/>
        <source>System partition management tool</source>
        <translation>システムパーティション管理ツール</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="764"/>
        <source>For more control over the drive layouts (such as modifying the existing layout on a disk), click the partition management button (%1). This will run the operating system&apos;s partition management tool, which will allow you to create the exact layout you need.</source>
        <translation>ドライブのレイアウトをより詳細に管理したい場合（ディスク上の既存レイアウトを変更する場合など）は、パーティション管理ボタン (%1) をクリックします。これによって、オペレーティングシステムのパーティション管理ツールが起動し、必要なレイアウトを正確に作成することができます。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="770"/>
        <source>To preserve an encrypted partition, right-click on it and select &lt;b&gt;Unlock&lt;/b&gt;. In the dialog that appears, enter a name for the virtual device and the password. When the device is unlocked, the name you chose will appear under &lt;i&gt;Virtual Devices&lt;/i&gt;, with similar options to that of a regular partition.</source>
        <translation>暗号化されたパーティションを保持するには、そのパーティションを右クリックして&lt;b&gt;ロック解除&lt;/b&gt;を選択します。表示されるダイアログで、仮想デバイスの名前とパスワードを入力します。デバイスのロックが解除されると、選択した名前が&lt;i&gt;仮想デバイス&lt;/i&gt;に表示され、通常のパーティションと同様のオプションが表示されます。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="772"/>
        <source>For the encrypted partition to be unlocked at boot, it needs to be added to the crypttab file. Use the &lt;b&gt;Add to crypttab&lt;/b&gt; menu action to do this.</source>
        <translation>暗号化されたパーティションをブート時にロック解除するには、そのパーティションを crypttab ファイルに追加する必要があります。これを行うには、&lt;b&gt;Add to crypttab&lt;/b&gt; メニューアクションを使用します。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="773"/>
        <source>Other partitions</source>
        <translation>その他のパーテーション</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="774"/>
        <source>The installer allows other partitions to be created or used for other purposes, however be mindful that older systems cannot handle drives with more than 4 partitions.</source>
        <translation>インストーラでは、他のパーティションを作成したり、他の目的に使用することができますが、古いシステムでは4つ以上のパーティションを持つドライブを処理できないことに注意してください。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="775"/>
        <source>Subvolumes</source>
        <translation>サブボリューム</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="776"/>
        <source>Some file systems, such as Btrfs, support multiple subvolumes in a single partition. These are not physical subdivisions, and so their order does not matter.</source>
        <translation>Btrfs などの一部のファイルシステムは、1 つのパーティション内で複数のサブボリュームをサポートします。これらは物理的な分割ではないため、順序は関係ありません。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="778"/>
        <source>Use the &lt;b&gt;Scan subvolumes&lt;/b&gt; menu action to search an existing Btrfs partition for subvolumes. To create a new subvolume, use the &lt;b&gt;New subvolume&lt;/b&gt; menu action.</source>
        <translation>&lt;b&gt;サブボリュームのスキャン&lt;/b&gt;メニューアクションを使用して、既存の Btrfs パーティションでサブボリュームを検索します。新しいサブボリュームを作成するには、&lt;b&gt;新規サブボリューム&lt;/b&gt;のメニューアクションを使用します。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="780"/>
        <source>Existing subvolumes can be preserved, however the name must remain the same.</source>
        <translation>既存のサブボリュームは保持できますが、名前は元と同じままにする必要があります。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="781"/>
        <source>Virtual Devices</source>
        <translation>仮想デバイス</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="782"/>
        <source>If the intaller detects any virtual devices such as opened LUKS partitions, LVM logical volumes or software-based RAID volumes, they may be used for the installation.</source>
        <translation>イントーラーが、開いている LUK パーティションや LVM 論理ボリューム、またはソフトウェアベースの RAID ボリュームなどの仮想デバイスを検出した場合、それらはインストールで使用可能です。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="783"/>
        <source>The use of virtual devices (beyond preserving encrypted file systems) is an advanced feature. You may have to edit some files (eg. initramfs, crypttab, fstab) to ensure the virtual devices used are created upon boot.</source>
        <translation>仮想デバイスの使用 (暗号化されたファイルシステムの保持以上の操作) は高度な機能です。使用する仮想デバイスがブート時に確実に作成されるようにするには、いくつかのファイル (initramfs、crypttab、fstab など) を編集する必要があります。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="788"/>
        <source>&lt;p&gt;&lt;b&gt;Select Boot Method&lt;/b&gt;&lt;br/&gt; %1 uses the GRUB bootloader to boot %1 and MS-Windows. &lt;p&gt;By default GRUB2 is installed in the Master Boot Record (MBR) or ESP (EFI System Partition for 64-bit UEFI boot systems) of your boot drive and replaces the boot loader you were using before. This is normal.&lt;/p&gt;&lt;p&gt;If you choose to install GRUB2 to Partition Boot Record (PBR) instead, then GRUB2 will be installed at the beginning of the specified partition. This option is for experts only.&lt;/p&gt;&lt;p&gt;If you uncheck the Install GRUB box, GRUB will not be installed at this time. This option is for experts only.&lt;/p&gt;</source>
        <translation>&lt;p&gt;&lt;b&gt;Select Boot Method&lt;/b&gt;&lt;br/&gt; %1 は GRUB ブートローダを使用して %1 と MS-Windows を起動します。&lt;p&gt;デフォルトでは、GRUB2 はブートドライブのマスターブートレコード (MBR) または ESP (64-bit UEFI ブートシステムの場合は EFI システムパーティション) にインストールされ、以前使用していたブートローダを置き換えます。これは正常です。&lt;/p&gt;&lt;p&gt;GRUB2をパーティションブートレコード(PBR)にインストールする場合、GRUB2は指定されたパーティションの先頭にインストールされます。このオプションはエキスパート専用です。&lt;/p&gt;&lt;p&gt;GRUBをインストールのチェックを外すと、この時点でGRUBはインストールされません。このオプションはエキスパート専用です。&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="801"/>
        <source>&lt;p&gt;&lt;b&gt;Common Services to Enable&lt;/b&gt;&lt;br/&gt;Select any of these common services that you might need with your system configuration and the services will be started automatically when you start %1.&lt;/p&gt;</source>
        <translation>&lt;p&gt;&lt;b&gt;コモンサービスの有効&lt;/b&gt;&lt;br/&gt;ご使用のシステム構成に必要なサービスがあればそれを選択して下さい。これは %1 起動時に自動的に開始されます。&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="805"/>
        <source>&lt;p&gt;&lt;b&gt;Computer Identity&lt;/b&gt;&lt;br/&gt;The computer name is a common unique name which will identify your computer if it is on a network. The computer domain is unlikely to be used unless your ISP or local network requires it.&lt;/p&gt;&lt;p&gt;The computer and domain names can contain only alphanumeric characters, dots, hyphens. They cannot contain blank spaces, start or end with hyphens&lt;/p&gt;&lt;p&gt;The SaMBa Server needs to be activated if you want to use it to share some of your directories or printer with a local computer that is running MS-Windows or Mac OSX.&lt;/p&gt;</source>
        <translation>&lt;p&gt;&lt;b&gt;コンピュータ ID&lt;/b&gt;&lt;br/&gt;コンピュータ名は、ネットワーク上でコンピュータを特定するための名称です。インターネットサービスプロバイダ（ISP）またはローカル・ネットワークが必要としない限り、コンピュータドメインは使われません。&lt;/p&gt;&lt;p&gt;コンピュータ名・ドメイン名は英数・ドット（.）・ハイフン（-）の文字で構成されます。空白を含めず、ハイフンは前後に付けられません。&lt;/p&gt;&lt;p&gt;フォルダやプリンターを Windows・Mac OS X を実行するコンピュータを共有するためには SAMBA サーバを有効にする必要があります。&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="815"/>
        <source>Localization Defaults</source>
        <translation>地域化の既定</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="816"/>
        <source>Set the default locale. This will apply unless they are overridden later by the user.</source>
        <translation>デフォルトの地域を設定します。これは、後でユーザーが上書きしない限り、適用されます。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="817"/>
        <source>Configure Clock</source>
        <translation>時刻の設定</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="818"/>
        <source>If you have an Apple or a pure Unix computer, by default the system clock is set to Greenwich Meridian Time (GMT) or Coordinated Universal Time (UTC). To change this, check the &quot;&lt;b&gt;System clock uses local time&lt;/b&gt;&quot; box.</source>
        <translation>Apple または純粋な Unixコンピュータの場合、デフォルトではシステムクロックはグリニッジ標準時（GMT）または協定世界時（UTC）に設定されています。これを変更するには、「&lt;b&gt;システムクロックは現地時刻を使う&lt;/b&gt;」のボックスをチェックします。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="820"/>
        <source>The system boots with the timezone preset to GMT/UTC. To change the timezone, after you reboot into the new installation, right click on the clock in the Panel and select Properties.</source>
        <translation>システムは、タイムゾーンがGMT/UTCに予めセットされた状態で起動します。タイムゾーンを変更するには、新規インストール環境で再起動した後、パネル内の時計を右クリックして「プロパティ」を選択します。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="822"/>
        <source>Service Settings</source>
        <translation>各種サービスの設定</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="823"/>
        <source>Most users should not change the defaults. Users with low-resource computers sometimes want to disable unneeded services in order to keep the RAM usage as low as possible. Make sure you know what you are doing!</source>
        <translation>たいていのユーザーはデフォルト値を変更しないでください。ただし、リソースの少ないコンピューターでは、RAMの使用量をできるだけ少なくするために、必要のないサービスを無効にしたい場合があります。自分が何をしようとしているのか良く考えましょう。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="829"/>
        <source>Default User Login</source>
        <translation>既定のユーザーログイン</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="830"/>
        <source>The root user is similar to the Administrator user in some other operating systems. You should not use the root user as your daily user account. Please enter the name for a new (default) user account that you will use on a daily basis. If needed, you can add other user accounts later with %1 User Manager.</source>
        <translation>root ユーザーは、他のいくつかのオペレーティングシステムにおける管理者アカウントに似ています。通常使用するユーザーアカウントとして root ユーザーを使用しないでください。日常的に使用する新しい (既定の) ユーザー アカウントの名前を入力してください。もし必要な場合は、あとから %1 ユーザー管理 でアカウントの追加を行うことができます。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="834"/>
        <source>Passwords</source>
        <translation>パスワード</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="835"/>
        <source>Enter a new password for your default user account and for the root account. Each password must be entered twice.</source>
        <translation>デフォルトのユーザーアカウントと root アカウントの新規パスワードを入力してください。それぞれのパスワードは2回入力する必要があります。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="837"/>
        <source>No passwords</source>
        <translation>パスワードの不使用</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="838"/>
        <source>If you want the default user account to have no password, leave its password fields empty. This allows you to log in without requiring a password.</source>
        <translation>デフォルトのユーザーアカウントにパスワードを設定したくない場合は、そのパスワード入力欄を空白にしてください。これで、パスワードを要求されずにログインすることができます。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="840"/>
        <source>Obviously, this should only be done in situations where the user account does not need to be secure, such as a public terminal.</source>
        <translation>もちろん、これは公共の端末などで、ユーザーアカウントの安全性を確保する必要がない場合にのみ行うべきものです。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="848"/>
        <source>Old Home Directory</source>
        <translation>古いホームディレクトリ</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="849"/>
        <source>A home directory already exists for the user name you have chosen. This screen allows you to choose what happens to this directory.</source>
        <translation>選択したユーザー名のホームディレクトリが既に存在しています。この画面で、そのディレクトリをどうするか選択することができます。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="851"/>
        <source>Re-use it for this installation</source>
        <translation>このインストールで再利用します</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="852"/>
        <source>The old home directory will be used for this user account. This is a good choice when upgrading, and your files and settings will be readily available.</source>
        <translation>古いホームディレクトリ用にこのユーザーアカウントが使用されます。これはアップグレードの際に良い選択であり、ファイルや設定がすぐ利用できるようになります。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="854"/>
        <source>Rename it and create a new directory</source>
        <translation>それを変更して新しいディレクトリを作成</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="855"/>
        <source>A new home directory will be created for the user, but the old home directory will be renamed. Your files and settings will not be immediately visible in the new installation, but can be accessed using the renamed directory.</source>
        <translation>新しいホームディレクトリが作成されますが、古いホームディレクトリの名前は変更されます。ファイルや設定は新しいインストールではすぐには表示されませんが、名前変更後のディレクトリを使用してアクセスできます。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="857"/>
        <source>The old directory will have a number at the end of it, depending on how many times the directory has been renamed before.</source>
        <translation>古いディレクトリは、以前に何度リネームされたかによって、そのディレクトリの最後に数字が表示されます。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="858"/>
        <source>Delete it and create a new directory</source>
        <translation>それを削除し新しいディレクトリを作成</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="859"/>
        <source>The old home directory will be deleted, and a new one will be created from scratch.</source>
        <translation>古いホームディレクトリは削除され、新しいホームディレクトリが最初から作成されます。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="860"/>
        <source>Warning</source>
        <translation>警告</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="861"/>
        <source>All files and settings will be deleted permanently if this option is selected. Your chances of recovering them are low.</source>
        <translation>このオプションを選択した場合、すべてのファイルと設定は永久に削除されます。復元できる可能性が低くなります。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="877"/>
        <source>Installation in Progress</source>
        <translation>インストール進行中</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="878"/>
        <source>%1 is installing. For a fresh install, this will probably take 3-20 minutes, depending on the speed of your system and the size of any partitions you are reformatting.</source>
        <translation>%1 をインストール中です。新規インストールの場合、システムの速度や再フォーマットするパーティションのサイズによっては、およそ3分から20分位かかります。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="880"/>
        <source>If you click the Abort button, the installation will be stopped as soon as possible.</source>
        <translation>中止ボタンをクリックすると、すぐにインストールが中止されます。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="882"/>
        <source>Change settings while you wait</source>
        <translation>待機している間に設定を変更</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="883"/>
        <source>While %1 is being installed, you can click on the &lt;b&gt;Next&lt;/b&gt; or &lt;b&gt;Back&lt;/b&gt; buttons to enter other information required for the installation.</source>
        <translation>%1  がインストールされている間、&lt;b&gt;次へ&lt;/b&gt; ボタンまたは &lt;b&gt;戻る&lt;/b&gt; ボタンをクリックして、インストールに必要なその他の情報を入力できます。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="885"/>
        <source>Complete these steps at your own pace. The installer will wait for your input if necessary.</source>
        <translation>ご自分のペースでこれらのステップを完了させてください。インストーラーは必要に応じてあなたの入力を待ちます。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="892"/>
        <source>&lt;p&gt;&lt;b&gt;Congratulations!&lt;/b&gt;&lt;br/&gt;You have completed the installation of %1&lt;/p&gt;&lt;p&gt;&lt;b&gt;Finding Applications&lt;/b&gt;&lt;br/&gt;There are hundreds of excellent applications installed with %1 The best way to learn about them is to browse through the Menu and try them. Many of the apps were developed specifically for the %1 project. These are shown in the main menus. &lt;p&gt;In addition %1 includes many standard Linux applications that are run only from the command line and therefore do not show up in the Menu.&lt;/p&gt;</source>
        <translation>&lt;p&gt;&lt;b&gt;おめでとうございます！&lt;/b&gt;&lt;br/&gt;%1 のインストールが完了しました&lt;/p&gt;&lt;p&gt;&lt;b&gt;アプリケーションの検索&lt;/b&gt;&lt;br/&gt;%1 には沢山の素晴らしいアプリケーションが入っています。まずはメニュー中を探索して下さい。多くのアプリは特に %1 環境のために作成されています。これはメインメニューの中に表示されています。&lt;p&gt;更に %1 はコマンドラインだけから動作する、メニューに表示されない標準の Linux アプリケーションを含んでいます。&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="901"/>
        <source>Enjoy using %1&lt;/b&gt;&lt;/p&gt;</source>
        <translation>%1 を使って楽しんでください&lt;/b&gt;&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="902"/>
        <location filename="../minstall.cpp" line="1206"/>
        <source>&lt;p&gt;&lt;b&gt;Support %1&lt;/b&gt;&lt;br/&gt;%1 is supported by people like you. Some help others at the support forum - %2 - or translate help files into different languages, or make suggestions, write documentation, or help test new software.&lt;/p&gt;</source>
        <translation>&lt;p&gt;&lt;b&gt;%1 のサポート&lt;/b&gt;&lt;br/&gt;%1 はあなたのような皆さんに支援されています。サポートフォーラム %2  で他の人を助ける、使用している言語の翻訳作業を行う、ドキュメント作成を行う、新しいバージョンのテストを行う、といった支援が可能です。&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="932"/>
        <source>Finish</source>
        <translation>完了</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="935"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="937"/>
        <source>Next</source>
        <translation>次へ</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="975"/>
        <source>Configuring sytem. Please wait.</source>
        <translation>システムを構成しています。お待ちください。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="979"/>
        <source>Configuration complete. Restarting system.</source>
        <translation>設定が完了しました。システムを再起動します。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="1002"/>
        <location filename="../minstall.cpp" line="1319"/>
        <source>Root</source>
        <translation>ルート</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="1004"/>
        <location filename="../minstall.cpp" line="1327"/>
        <source>Home</source>
        <translation>ホームディレクトリ</translation>
    </message>
    <message>
        <source>Confirmation</source>
        <translation type="vanished">確認</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="1141"/>
        <source>The installation and configuration is incomplete.
Do you really want to stop now?</source>
        <translation>インストールと設定がまだ完了していません。
本当に処理を中止したいのですか？</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="1192"/>
        <source>&lt;p&gt;&lt;b&gt;Getting Help&lt;/b&gt;&lt;br/&gt;Basic information about %1 is at %2.&lt;/p&gt;&lt;p&gt;There are volunteers to help you at the %3 forum, %4&lt;/p&gt;&lt;p&gt;If you ask for help, please remember to describe your problem and your computer in some detail. Usually statements like &apos;it didn&apos;t work&apos; are not helpful.&lt;/p&gt;</source>
        <translation>&lt;p&gt;&lt;b&gt;困った時に&lt;/b&gt;&lt;br/&gt;%1 の基本的な情報は %2 で参照できます。&lt;/p&gt;&lt;p&gt;%3 Forum %4 で助けてくれる人がいるでしょう。&lt;/p&gt;&lt;p&gt;もし助けを求める場合、その問題のとコンピュータ情報の詳細を忘れず記述してください。通常、「動きません」とだけ書かれたような内容は役に立ちません。&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="1200"/>
        <source>&lt;p&gt;&lt;b&gt;Repairing Your Installation&lt;/b&gt;&lt;br/&gt;If %1 stops working from the hard drive, sometimes it&apos;s possible to fix the problem by booting from LiveDVD or LiveUSB and running one of the included utilities in %1 or by using one of the regular Linux tools to repair the system.&lt;/p&gt;&lt;p&gt;You can also use your %1 LiveDVD or LiveUSB to recover data from MS-Windows systems!&lt;/p&gt;</source>
        <translation>&lt;p&gt;&lt;b&gt;インストールの修復&lt;/b&gt;&lt;br/&gt;%1 はハードドライブから作業を停止した場合、LiveDVD や LiveUSB からブートして、 %1 ツールのユーティリティまたはシステムを修復するための通常の Linux ツールを使用して問題を解決することが可能です。&lt;/p&gt;&lt;p&gt;また、MS-Windows システムからデータを回復するために %1 LiveDVD や LiveUSB を使用することができます！&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="1214"/>
        <source>&lt;p&gt;&lt;b&gt;Adjusting Your Sound Mixer&lt;/b&gt;&lt;br/&gt; %1 attempts to configure the sound mixer for you but sometimes it will be necessary for you to turn up volumes and unmute channels in the mixer in order to hear sound.&lt;/p&gt; &lt;p&gt;The mixer shortcut is located in the menu. Click on it to open the mixer. &lt;/p&gt;</source>
        <translation>&lt;p&gt;&lt;b&gt;サウンドミキサーの調整&lt;/b&gt;&lt;br/&gt;%1 はサウンドミキサーを設定します。ときには音を聞くためボリュームを上げたり、ミキサーのミュート解除が必要になるかもしれません。&lt;/p&gt; &lt;p&gt;ミキサーのショートカットはメニューにあります。ミキサーを開くにはこれをクリックしてください。 &lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="1222"/>
        <source>&lt;p&gt;&lt;b&gt;Keep Your Copy of %1 up-to-date&lt;/b&gt;&lt;br/&gt;For more information and updates please visit&lt;/p&gt;&lt;p&gt; %2&lt;/p&gt;</source>
        <translation>&lt;p&gt;&lt;b&gt;%1 のコピーを最新にする&lt;/b&gt;&lt;br/&gt; さらなる情報やアップデートについては&lt;/p&gt; %2 &lt;p&gt;参照してください。</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="1227"/>
        <source>&lt;p&gt;&lt;b&gt;Special Thanks&lt;/b&gt;&lt;br/&gt;Thanks to everyone who has chosen to support %1 with their time, money, suggestions, work, praise, ideas, promotion, and/or encouragement.&lt;/p&gt;&lt;p&gt;Without you there would be no %1.&lt;/p&gt;&lt;p&gt;%2 Dev Team&lt;/p&gt;</source>
        <translation>&lt;p&gt;&lt;b&gt;特別な感謝&lt;/b&gt;&lt;br/&gt;%1 をサポートするために、自分の時間やお金、提案、仕事、賞賛、アイデア、プロモーション、激励を提供していただいた全ての方々に感謝いたします。&lt;/p&gt;&lt;p&gt;あなたなしでは %1 はなかったでしょう。&lt;/p&gt;&lt;p&gt;%2 開発チーム&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="1278"/>
        <source>%1% root
%2% home</source>
        <translation>root %1%
home %2%</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="1280"/>
        <source>Combined root and home</source>
        <translation>root と home の組み合わせ</translation>
    </message>
    <message>
        <location filename="../minstall.cpp" line="1324"/>
        <source>----</source>
        <translation>----</translation>
    </message>
</context>
<context>
    <name>MPassEdit</name>
    <message>
        <location filename="../mpassedit.cpp" line="101"/>
        <source>Use password</source>
        <translation>パスワードを使用する</translation>
    </message>
    <message>
        <location filename="../mpassedit.cpp" line="188"/>
        <source>Hide the password</source>
        <translation>パスワードの非表示</translation>
    </message>
    <message>
        <location filename="../mpassedit.cpp" line="188"/>
        <source>Show the password</source>
        <translation>パスワードの表示</translation>
    </message>
</context>
<context>
    <name>MeInstall</name>
    <message>
        <location filename="../meinstall.ui" line="43"/>
        <source>Help</source>
        <translation>ヘルプ</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="69"/>
        <source>Live Log</source>
        <translation>ライブ・ログ</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="107"/>
        <source>Close</source>
        <translation>閉じる</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="118"/>
        <source>Next</source>
        <translation>次へ</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="125"/>
        <source>Alt+N</source>
        <translation>Alt+N</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="166"/>
        <source>Gathering Information, please stand by.</source>
        <translation>情報を集めているのでしばらくお待ちください</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="201"/>
        <source>Terms of Use</source>
        <translation>利用規約</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="228"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p align=&quot;center&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Keyboard Settings&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p align=&quot;center&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;キーボード設定&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="235"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p align=&quot;right&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Model:&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p align=&quot;right&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;モデル:&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="242"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p align=&quot;right&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Variant:&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p align=&quot;right&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Variant:&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="259"/>
        <source>Change Keyboard Settings</source>
        <translation>キーボードの設定を変更</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="266"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p align=&quot;right&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Layout:&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p align=&quot;right&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;レイアウト:&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="317"/>
        <source>Select type of installation</source>
        <translation>インストールのタイプを選択</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="329"/>
        <source>Regular install using the entire disk</source>
        <translation>ディスク全体を利用して通常のインストール</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="342"/>
        <source>Customize the disk layout</source>
        <translation>ディスクレイアウトをカスタマイズ</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="355"/>
        <source>Use disk:</source>
        <translation>使用ディスク:</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="368"/>
        <source>Encrypt</source>
        <translation>暗号化</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="380"/>
        <location filename="../meinstall.ui" line="669"/>
        <source>Encryption password:</source>
        <translation>暗号化パスワード:</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="410"/>
        <location filename="../meinstall.ui" line="702"/>
        <source>Confirm password:</source>
        <translation>パスワードの確認:</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="457"/>
        <source>Root</source>
        <translation>ルート</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="526"/>
        <source>Home</source>
        <translation>ホームディレクトリ</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="567"/>
        <source>Choose partitions</source>
        <translation>パーティションの選択</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="576"/>
        <source>Query the operating system and reload the layouts of all drives.</source>
        <translation>オペレーティングシステムを再確認、すべてのドライブのレイアウトをリロードします。</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="587"/>
        <source>Remove an existing entry from the layout. This only works with entries to a new layout.</source>
        <translation>レイアウトから既存のエントリーを削除します。これは、新しいレイアウトへのエントリーでのみ機能します。</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="598"/>
        <source>Add a new partition entry. This only works with a new layout.</source>
        <translation>新規パーティションエントリを追加します。これは新規レイアウトのときだけ機能します。</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="609"/>
        <source>Mark the selected drive to be cleared for a new layout.</source>
        <translation>新規レイアウトのために、選択したドライブにマークを付けます。</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="630"/>
        <source>Run the partition management application of this operating system.</source>
        <translation>このOSのパーティション管理アプリを実行してください。</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="653"/>
        <source>Encryption options</source>
        <translation>暗号化オプション</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="728"/>
        <source>Install GRUB for Linux and Windows</source>
        <translation>Linux および Windows 向けに GRUB をインストール</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="752"/>
        <source>Master Boot Record</source>
        <translation>MBR (マスターブートレコード)</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="758"/>
        <source>MBR</source>
        <translation>MBR</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="761"/>
        <source>Alt+B</source>
        <translation>Alt+B</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="783"/>
        <source>EFI System Partition</source>
        <translation>EFI システムパーティション</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="786"/>
        <source>ESP</source>
        <translation>ESP</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="812"/>
        <source>Partition Boot Record</source>
        <translation>パーティションの起動レコード</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="815"/>
        <source>PBR</source>
        <translation>PBR</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="828"/>
        <source>System boot disk:</source>
        <translation>システム起動ディスク:</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="841"/>
        <source>Location to install on:</source>
        <translation>インストール先:</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="893"/>
        <source>Common Services to Enable</source>
        <translation>共通サービスを有効に</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="912"/>
        <source>Service</source>
        <translation>サービス</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="917"/>
        <source>Description</source>
        <translation>説明</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="950"/>
        <source>Computer Network Names</source>
        <translation>コンピュータネットワークの名前</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="977"/>
        <source>Workgroup</source>
        <translation>ワークグループ</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="990"/>
        <source>Workgroup:</source>
        <translation>ワークグループ:</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1003"/>
        <source>SaMBa Server for MS Networking</source>
        <translation>MSネットワーク用 SaMBaサーバー</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1019"/>
        <source>example.dom</source>
        <translation>example.dom</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1032"/>
        <source>Computer domain:</source>
        <translation>コンピュータドメイン:</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1058"/>
        <source>Computer name:</source>
        <translation>コンピュータ名:</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1113"/>
        <source>Configure Clock</source>
        <translation>時刻の設定</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1148"/>
        <source>Format:</source>
        <translation>フォーマット:</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1176"/>
        <source>Timezone:</source>
        <translation>タイムゾーン:</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1215"/>
        <source>System clock uses local time</source>
        <translation>システムクロックに現地時刻を使用する</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1241"/>
        <source>Localization Defaults</source>
        <translation>地域化の既定</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1281"/>
        <source>Locale:</source>
        <translation>ロケール:</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1303"/>
        <source>Service Settings (advanced)</source>
        <translation>サービス設定 (高度な設定)</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1321"/>
        <source>Adjust which services should run at startup</source>
        <translation>起動時に実行されるサービスの調整</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1324"/>
        <source>View</source>
        <translation>表示</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1363"/>
        <source>Desktop modifications made in the live environment will be carried over to the installed OS</source>
        <translation>ライブ環境で作られたデスクトップの修正がインストールされている OS へ引き継がれます</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1366"/>
        <source>Save live desktop changes</source>
        <translation>ライブデスクトップの変更を保存</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1379"/>
        <source>Default User Account</source>
        <translation>既定のユーザーアカウント</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1391"/>
        <source>Default user login name:</source>
        <translation>既定のユーザーログイン名:</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1407"/>
        <source>Default user password:</source>
        <translation>既定のユーザーパスワード:</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1420"/>
        <source>Confirm user password:</source>
        <translation>ユーザパスワードの確認:</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1481"/>
        <source>username</source>
        <translation>ユーザー名</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1497"/>
        <source>Root (administrator) Account</source>
        <translation>Root (管理者) アカウント</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1515"/>
        <source>Root password:</source>
        <translation>root パスワード:</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1560"/>
        <source>Confirm root password:</source>
        <translation>root パスワードの確認:</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1589"/>
        <source>Autologin</source>
        <translation>自動ログイン</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1619"/>
        <source>Existing Home Directory</source>
        <translation>現在のホームディレクトリ</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1628"/>
        <source>What would you like to do with the old directory?</source>
        <translation>古いディレクトリをどうしますか？</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1635"/>
        <source>Re-use it for this installation</source>
        <translation>このインストールで再利用します</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1642"/>
        <source>Rename it and create a new directory</source>
        <translation>リネイムして新しいディレクトリを作成</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1649"/>
        <source>Delete it and create a new directory</source>
        <translation>それを削除し新しいディレクトリを作成</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1688"/>
        <source>Tips</source>
        <translation>便利な使い方</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1732"/>
        <source>Installation complete</source>
        <translation>インストール完了</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1738"/>
        <source>Automatically reboot the system when the installer is closed</source>
        <translation>インストーラを閉じると自動的にシステムを再起動します</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1757"/>
        <source>Reminders</source>
        <translation>リマインダー</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1792"/>
        <source>Back</source>
        <translation>戻る</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1799"/>
        <source>Alt+K</source>
        <translation>Alt+K</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1812"/>
        <source>Installation in progress</source>
        <translation>インストール進行中</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1827"/>
        <source>Abort</source>
        <translation>中止</translation>
    </message>
    <message>
        <location filename="../meinstall.ui" line="1830"/>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
</context>
<context>
    <name>Oobe</name>
    <message>
        <location filename="../oobe.cpp" line="320"/>
        <source>Please enter a computer name.</source>
        <translation>コンピューター名を入力してください。</translation>
    </message>
    <message>
        <location filename="../oobe.cpp" line="324"/>
        <source>Sorry, your computer name contains invalid characters.
You&apos;ll have to select a different
name before proceeding.</source>
        <translation>申しわけありませんがコンピューター名に無効な文字列が含まれています。
先へ進むには別の名前を選んでください。</translation>
    </message>
    <message>
        <location filename="../oobe.cpp" line="329"/>
        <source>Please enter a domain name.</source>
        <translation>ドメイン名を入力してください。</translation>
    </message>
    <message>
        <location filename="../oobe.cpp" line="333"/>
        <source>Sorry, your computer domain contains invalid characters.
You&apos;ll have to select a different
name before proceeding.</source>
        <translation>申しわけありませんがコンピューターのドメインに無効な文字列が含まれています。
先へ進むには別の名前を選んでください。</translation>
    </message>
    <message>
        <location filename="../oobe.cpp" line="340"/>
        <source>Please enter a workgroup.</source>
        <translation>ワークグループを入力してください。</translation>
    </message>
    <message>
        <location filename="../oobe.cpp" line="475"/>
        <source>The user name cannot contain special characters or spaces.
Please choose another name before proceeding.</source>
        <translation>ユーザー名には特殊文字や空白を含むことができません。
先へ進むには別の名前を選んで下さい。</translation>
    </message>
    <message>
        <location filename="../oobe.cpp" line="486"/>
        <source>Sorry, that name is in use.
Please select a different name.</source>
        <translation>申しわけありませんが、この名前はすでに使われています。
別の名前を選んでください。</translation>
    </message>
    <message>
        <location filename="../oobe.cpp" line="495"/>
        <source>You did not provide a password for the root account. Do you want to continue?</source>
        <translation>rootアカウントのパスワードを入力していません。作業を続けますか？</translation>
    </message>
    <message>
        <location filename="../oobe.cpp" line="524"/>
        <source>Failed to set user account passwords.</source>
        <translation>ユーザーアカウントのパスワード設定に失敗しました。</translation>
    </message>
    <message>
        <location filename="../oobe.cpp" line="543"/>
        <source>Failed to save old home directory.</source>
        <translation>以前の home ディレクトリの保存に失敗しました。</translation>
    </message>
    <message>
        <location filename="../oobe.cpp" line="547"/>
        <source>Failed to delete old home directory.</source>
        <translation>以前の home ディレクトリの削除に失敗しました。</translation>
    </message>
    <message>
        <location filename="../oobe.cpp" line="568"/>
        <source>Sorry, failed to create user directory.</source>
        <translation>ユーザーディレクトリの生成に失敗しました。</translation>
    </message>
    <message>
        <location filename="../oobe.cpp" line="572"/>
        <source>Sorry, failed to name user directory.</source>
        <translation>ユーザーディレクトリの命名に失敗しました。</translation>
    </message>
    <message>
        <location filename="../oobe.cpp" line="607"/>
        <source>Sorry, failed to set ownership of user directory.</source>
        <translation>ユーザーディレクトリの権限設定に失敗しました。</translation>
    </message>
</context>
<context>
    <name>PartMan</name>
    <message>
        <location filename="../partman.cpp" line="227"/>
        <source>Virtual Devices</source>
        <translation>仮想デバイス</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="451"/>
        <location filename="../partman.cpp" line="505"/>
        <source>&amp;Add partition</source>
        <translation>&amp;パーティション追加</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="453"/>
        <source>&amp;Remove partition</source>
        <translation>&amp;パーティション削除</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="463"/>
        <source>&amp;Lock</source>
        <translation>&amp;ロック</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="467"/>
        <source>&amp;Unlock</source>
        <translation>&amp;ロック解除</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="472"/>
        <location filename="../partman.cpp" line="602"/>
        <source>Add to crypttab</source>
        <translation>crypttab へ追加</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="478"/>
        <source>Active partition</source>
        <translation>アクティブパーティション</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="484"/>
        <source>New subvolume</source>
        <translation>新規サブボリューム</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="485"/>
        <source>Scan subvolumes</source>
        <translation>サブボリュームのスキャン</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="508"/>
        <source>New &amp;layout</source>
        <translation>新規 &amp;レイアウト</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="509"/>
        <source>&amp;Reset layout</source>
        <translation>&amp;レイアウトのリセット</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="510"/>
        <source>&amp;Templates</source>
        <translation>&amp;テンプレート</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="511"/>
        <source>&amp;Standard install</source>
        <translation>&amp;標準的なインストール</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="512"/>
        <source>&amp;Encrypted system</source>
        <translation>&amp;暗号化システム</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="531"/>
        <source>Remove subvolume</source>
        <translation>サブボリュームの削除</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="599"/>
        <source>Unlock Drive</source>
        <translation>ドライブのロック解除</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="605"/>
        <source>Virtual Device:</source>
        <translation>仮想デバイス</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="606"/>
        <source>Password:</source>
        <translation>パスワード</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="635"/>
        <source>Could not unlock device. Possible incorrect password.</source>
        <translation>デバイスをロック解除できません。パスワードが正しくないようです。</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="664"/>
        <source>Failed to close %1</source>
        <translation>%1 の近くで失敗しました</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="708"/>
        <source>Invalid subvolume label</source>
        <translation>無効なサブボリュームラベル</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="719"/>
        <source>Duplicate subvolume label</source>
        <translation>重複したサブボリュームラベル</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="728"/>
        <source>Invalid use for %1: %2</source>
        <translation>無効な %1: %2 の利用</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="739"/>
        <source>%1 is already selected for: %2</source>
        <translation>%1 はすでに %2 で選択されています。</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="764"/>
        <source>A root partition of at least %1 is required.</source>
        <translation>少なくとも %1の root パーティションが必要です。</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="768"/>
        <source>Cannot preserve /home inside root (/) if a separate /home partition is also mounted.</source>
        <translation>別の独立した /home パーティションがマウントされている場合、root (/) 内に /home を保持することはできません。</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="777"/>
        <source>You must choose a separate boot partition when encrypting root.</source>
        <translation>暗号化するには別の独立した boot パーティションを選択する必要があります。</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="789"/>
        <source>Prepare %1 partition table on %2</source>
        <translation>%2 で %1 パーティションテーブルを準備します</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="801"/>
        <source>Format %1 to use for %2</source>
        <translation>%2 に使用する %1 を初期化します</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="802"/>
        <source>Reuse (no reformat) %1 as %2</source>
        <translation>%1 を %2 として再利用（再フォーマット不要）</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="803"/>
        <source>Delete the data on %1 except for /home, to use for %2</source>
        <translation>/home 以外の %1 のデータを削除して %2 に使用します</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="805"/>
        <source>Create %1 without formatting</source>
        <translation>初期化しないで %1 を作成します</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="806"/>
        <source>Create %1, format to use for %2</source>
        <translation>%1 を作成し、%2 に使用するため初期化します</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="823"/>
        <source>The following drives are, or will be, setup with GPT, but do not have a BIOS-GRUB partition:</source>
        <translation>以下のドライブは現在 GPT で設定されているか、または設定される予定ですが、BIOS-GRUB パーティションが存在しません。</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="825"/>
        <source>This system may not boot from GPT drives without a BIOS-GRUB partition.</source>
        <translation>このシステムでは、BIOS-GRUB パーティションが存在しないので、GPT ドライブから起動しないかもしれません。</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="826"/>
        <source>Are you sure you want to continue?</source>
        <translation>本当に作業を続けてもよろしいですか？</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="830"/>
        <source>The %1 installer will now perform the requested actions.</source>
        <translation>%1 インストーラーは今から指示された動作を実行します。</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="831"/>
        <source>These actions cannot be undone. Do you want to continue?</source>
        <translation>これから先の操作は元に戻すことができません。続けますか？</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="870"/>
        <source>The disks with the partitions you selected for installation are failing:</source>
        <translation>インストール用に選択したディスクのパーディションに障害が発生しています：</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="874"/>
        <source>Smartmon tool output:</source>
        <translation>Smartmonツールの出力：</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="875"/>
        <source>The disks with the partitions you selected for installation pass the SMART monitor test (smartctl), but the tests indicate it will have a higher than average failure rate in the near future.</source>
        <translation>インストール用に選択したディスクのパーディションは SMART モニターテスト (smartctl)に合格しましたが、テストは近い将来、平均よりも高い故障率になることを示しています。</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="880"/>
        <source>If unsure, please exit the Installer and run GSmartControl for more information.</source>
        <translation>よく分からないのであれば、このインストーラーを終了し、GSmartControl を起動して詳細をつかんでください。</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="882"/>
        <source>Do you want to abort the installation?</source>
        <translation>インストールを中止してよろしいですか？</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="887"/>
        <source>Do you want to continue?</source>
        <translation>作業を続けてもよろしいですか？</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="902"/>
        <source>Failed to format LUKS container.</source>
        <translation> LUKS コンテナの初期化に失敗しました。</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="911"/>
        <source>Failed to open LUKS container.</source>
        <translation>LUKS コンテナを開くことができません。</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="961"/>
        <source>Failed to prepare required partitions.</source>
        <translation>必要なパーティションを準備できません。</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="992"/>
        <source>Preparing partition tables</source>
        <translation>パーティション・テーブルの準備中</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="1008"/>
        <source>Preparing required partitions</source>
        <translation>必要なパーティションを準備中</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="1074"/>
        <source>Creating encrypted volume: %1</source>
        <translation>暗号化ボリュームの作成中: %1</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="1079"/>
        <source>Formatting: %1</source>
        <translation>フォーマット中: %1</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="1082"/>
        <source>Failed to format partition.</source>
        <translation>パーティションの初期化に失敗しました。</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="1140"/>
        <source>Failed to prepare subvolumes.</source>
        <translation>サブボリュームの準備に失敗しました。</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="1149"/>
        <source>Preparing subvolumes</source>
        <translation>サブボリュームを準備中</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="1323"/>
        <source>Failed to mount partition.</source>
        <translation>パーティションのマウントに失敗しました。</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="1326"/>
        <source>Mounting: %1</source>
        <translation>マウント中: %1</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="1486"/>
        <source>Model: %1</source>
        <translation>モデル: %1</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="1494"/>
        <source>Free space: %1</source>
        <translation>空き領域: %1</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="1579"/>
        <source>Device</source>
        <translation>デバイス</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="1580"/>
        <source>Size</source>
        <translation>サイズ</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="1581"/>
        <source>Use For</source>
        <translation>Use For</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="1582"/>
        <source>Label</source>
        <translation>ラベル</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="1583"/>
        <source>Encrypt</source>
        <translation>暗号化</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="1584"/>
        <source>Format</source>
        <translation>フォーマット</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="1585"/>
        <source>Check</source>
        <translation>チェック</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="1586"/>
        <source>Options</source>
        <translation>オプション</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="1587"/>
        <source>Dump</source>
        <translation>ダンプ</translation>
    </message>
    <message>
        <location filename="../partman.cpp" line="1588"/>
        <source>Pass</source>
        <translation>パス</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../app.cpp" line="63"/>
        <source>Customizable GUI installer for MX Linux and antiX Linux</source>
        <translation>MX Linux および antiX Linux用のカスタマイズ可能なGUIインストーラ</translation>
    </message>
    <message>
        <location filename="../app.cpp" line="66"/>
        <source>Installs automatically using the configuration file (more information below).
-- WARNING: potentially dangerous option, it will wipe the partition(s) automatically.</source>
        <translation>設定ファイルを使って自動的にインストールします（詳細は後述にあります）。
-- 警告: 潜在的に危険なオプションです。これはパーティションを自動的に消去するでしょう。</translation>
    </message>
    <message>
        <location filename="../app.cpp" line="68"/>
        <source>Overrules sanity checks on partitions and drives, causing them to be displayed.
-- WARNING: this can break things, use it only if you don&apos;t care about data on drive.</source>
        <translation>パーティションやドライブのサニティーチェックを無効にして表示させます。
-- 警告：これはデータを壊す可能性があるので、ドライブ上のデータを気にしない場合にのみ使用してください。</translation>
    </message>
    <message>
        <location filename="../app.cpp" line="70"/>
        <source>Load a configuration file as specified by &lt;config-file&gt;.
By default /etc/minstall.conf is used.
This configuration can be used with --auto for an unattended installation.
The installer creates (or overwrites) /mnt/antiX/etc/minstall.conf and saves a copy to /etc/minstalled.conf for future use.
The installer will not write any passwords or ignored settings to the new configuration file.
Please note, this is experimental. Future installer versions may break compatibility with existing configuration files.</source>
        <translation>&lt;config-file&gt; で指定された設定ファイルを読み込みます。
デフォルトでは /etc/minstall.conf を使用します。
この設定は、--auto と併用することで、自動インストールが可能です。
インストーラは、パスワードや無視された設定を新しい設定ファイルに書き込みません。インストーラは、/mnt/antiX/etc/minstall.conf を作成（または上書き）し、将来使用するために /etc/minstalled.conf にコピーを保存します。
インストーラは、パスワードや無視された設定を新しい設定ファイルには書き込みません。
注記：これは実験的なものです。将来公開されるインストーラーでは、既存の設定ファイルとの互換性が失われる可能性があります。</translation>
    </message>
    <message>
        <location filename="../app.cpp" line="76"/>
        <source>Shutdowns automatically when done installing.</source>
        <translation>インストールが完了すると自動的にシャットダウンします。</translation>
    </message>
    <message>
        <location filename="../app.cpp" line="77"/>
        <source>Always use GPT when doing a whole-drive installation regardlesss of capacity.
Without this option, GPT will only be used on drives with at least 2TB capacity.
GPT is always used on whole-drive installations on UEFI systems regardless of capacity, even without this option.</source>
        <translation>ドライブ全体のインストールを行う場合、容量に関わらず常にGPTを使用してください。
このオプションがない場合、GPTは2TB以上の容量のドライブでのみ使用されます。
このオプションがない場合でさえ、UEFI システム上のドライブ全体のインストールでは、容量に関わらず常に GPT が使用されます。</translation>
    </message>
    <message>
        <location filename="../app.cpp" line="80"/>
        <source>Do not unmount /mnt/antiX or close any of the associated LUKS containers when finished.</source>
        <translation>完了時には、/mnt/antiX をアンマウントしたり、関連する LUKS コンテナを閉じたりしないでください。</translation>
    </message>
    <message>
        <location filename="../app.cpp" line="81"/>
        <source>Another testing mode for installer, partitions/drives are going to be FORMATED, it will skip copying the files.</source>
        <translation>インストーラの別のテストモードでは、パーティション/ドライブがフォーマットされ、ファイルのコピーがスキップされます。</translation>
    </message>
    <message>
        <location filename="../app.cpp" line="82"/>
        <source>Install the operating system, delaying prompts for user-specific options until the first reboot.
Upon rebooting, the installer will be run with --oobe so that the user can provide these details.
This is useful for OEM installations, selling or giving away a computer with an OS pre-loaded on it.</source>
        <translation>オペレーティングシステムをインストールし、ユーザー特有のオプションの表示を最初の再起動まで遅延します。
再起動時に --oobe を付けてインストーラーが実行されるので、ユーザーにはこうした情報が提供されます
これは、OEMインストールや、OSがプリインストールされたコンピュータを販売したり、譲ったりする際に便利です。</translation>
    </message>
    <message>
        <location filename="../app.cpp" line="85"/>
        <source>Out Of the Box Experience option.
This will start automatically if installed with --oem option.</source>
        <translation>Out Of the Box 体験オプション。
--oem オプションでインストールした場合、自動的に起動します。</translation>
    </message>
    <message>
        <location filename="../app.cpp" line="87"/>
        <source>Test mode for GUI, you can advance to different screens without actially installing.</source>
        <translation>GUIのテストモードでは、実際にインストールすることなく、さまざまな画面に進むことができます。</translation>
    </message>
    <message>
        <location filename="../app.cpp" line="88"/>
        <source>Reboots automatically when done installing.</source>
        <translation>インストールが完了すると自動的に再起動します。</translation>
    </message>
    <message>
        <location filename="../app.cpp" line="89"/>
        <source>Installing with rsync instead of cp on custom partitioning.
-- doesn&apos;t format /root and it doesn&apos;t work with encryption.</source>
        <translation>カスタムパーティショニングで、cpの代わりにrsyncでインストールします。
-- /rootをフォーマットせず、暗号化にも対応しません。</translation>
    </message>
    <message>
        <location filename="../app.cpp" line="91"/>
        <source>Always check the installation media at the beginning.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../app.cpp" line="92"/>
        <source>Do not check the installation media at the beginning.
Not recommended unless the installation media is guaranteed to be free from errors.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../app.cpp" line="94"/>
        <source>Load a configuration file as specified by &lt;config-file&gt;.</source>
        <translation>&lt;config-file&gt; で指定された設定ファイルを読み込みます。</translation>
    </message>
    <message>
        <location filename="../app.cpp" line="98"/>
        <source>Too many arguments. Please check the command format by running the program with --help</source>
        <translation>引数が多すぎます。--help でプログラムを実行してコマンドの形式を確認してください。</translation>
    </message>
    <message>
        <location filename="../app.cpp" line="103"/>
        <source>%1 Installer</source>
        <translation>%1 インストーラー</translation>
    </message>
    <message>
        <location filename="../app.cpp" line="111"/>
        <source>The installer won&apos;t launch because it appears to be running already in the background.

Please close it if possible, or run &apos;pkill minstall&apos; in terminal.</source>
        <translation>インストーラは、既にバックグラウンドで実行されているようなので起動しません。

可能であれば閉じてください。または端末で &apos;pkill minstall&apos; を実行して下さい。</translation>
    </message>
    <message>
        <location filename="../app.cpp" line="118"/>
        <source>This operation requires root access.</source>
        <translation>この操作には root 権限が必要です。</translation>
    </message>
    <message>
        <location filename="../app.cpp" line="139"/>
        <source>Configuration file (%1) not found.</source>
        <translation>設定ファイル (%1) が見つかりません。</translation>
    </message>
</context>
</TS>