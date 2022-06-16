"use strict";(self.webpackChunkZeblog=self.webpackChunkZeblog||[]).push([[5806],{69679:(e,a,s)=>{s.r(a),s.d(a,{default:()=>v});var n=s(4270);const t=(0,n.uE)('<p>[toc]</p><h1 id="deepin" tabindex="-1"><a class="header-anchor" href="#deepin" aria-hidden="true">#</a> Deepin</h1><h2 id="系统" tabindex="-1"><a class="header-anchor" href="#系统" aria-hidden="true">#</a> 系统</h2><p>升级内核</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt update &amp;&amp; sudo apt install linux-image-5.8.14-amd64-desktop linux-headers-5.8.14-amd64-desktop\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>卸载内核</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>dpkg --list | grep linux-image\ndpkg --list | grep linux-headers\nsudo apt purge linux-image-5.4.*\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>apt autoremove \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就可以了</p><p><strong>QQ卡死</strong></p><p>如果 linux 里装了 win 的宋体，QQ 就会卡死，此时 QQ 会使用宋体里的点阵字体。此时解决方案是把 win 的宋体的 ttc 文件往 QQ 的 wine 容器里也装一份（即复制到 ~/.deepinwine/Deepin-QQ/drive_c/Windows/Fonts 里)，此时 QQ 不再使用宋体里的点阵字体，也基本不会卡死了。</p><p><strong>提示空间不足</strong></p><p>deepin20安装盘，启动项时按e编辑启动选项，删除livecd installer或类似字样，进入livecd模式。进入之后ctrl+alt+T打开终端，输入sudo -i，然后输入</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mount -t efivarfs efivarfs /sys/firmware/efi/efivars\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>之后最好用</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ls /sys/firmware/efi/efivars\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看是否有大量dump-开头的文件，如果是，那么继续执行</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rm /sys/firmware/efi/efivars/dump-*\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>网卡驱动</strong></p><p>https://bbs.deepin.org/zh/post/214079</p><p>https://bbs.deepin.org/zh/post/211628</p><p>#卸载网卡驱动 sudo apt autopurge bcmwl-kernel-source broadcom-sta-*</p><p>#下载网卡驱动 http://mirrors.ustc.edu.cn/debian/pool/non-free/b/broadcom-sta/broadcom-sta-source_6.30.223.271-17~bpo10%2B1_all.deb</p><p>#更新网卡驱动 sudo dpkg -i broadcom-sta*</p><p><strong>Selenium驱动</strong></p><p>export PATH=$PATH:/home/zhou/Documents/chromedriver/</p><p><strong>软件</strong></p><p>sudo apt purge unattended-upgrades</p><p>sudo apt autoclean</p><p>sudo dpkg --configure -a</p><p>sudo apt --fix-broken install</p><p>sudo apt install deepin-wine</p><p>sudo apt install build-essential gdb #gcc</p><p>sudo apt install putty</p><p>sudo apt install filezilla</p><p>sudo apt install python3-pip</p><p>sudo apt install lm-sensors hddtemp</p><p>sudo apt install psensor</p><p>sudo apt install git</p><p>sudo apt install -y chromium chromium-driver</p><p>sudo apt install telegram-desktop</p><p>sudo dpkg -i deepin.com.ynote_6.10.0.1_i386.deb</p><p><strong>notepadqq打不开</strong></p><p>sudo apt install libqt5websockets5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt install nfs-common\n#显示远程主机共享文件 \nshowmount -e 192.168.1.110 \n#创建本地目录 \nmkdir /NFSvideo \n#将远程文件夹挂载到本地目录 \nsudo mount -t nfs 192.168.1.110:/volume1/video /data/home/zhou/Videos/nasvideo \n#开启开机挂载 \nvi /etc/fstab \n192.168.1.15:/volume4/Swap  /NFSfile    nfs    defaults    0    0       \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>deepin.com.ynote_6.10.0.1_i386.deb</p><h2 id="tuna" tabindex="-1"><a class="header-anchor" href="#tuna" aria-hidden="true">#</a> TUNA</h2><p>The simple way:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wget https://tuna.moe/oh-my-tuna/oh-my-tuna.py \npython oh-my-tuna.py              \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Change system-wide settings instead of user-wide:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo python oh-my-tuna.py --global              \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Get help:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>python oh-my-tuna.py -h              \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安卓" tabindex="-1"><a class="header-anchor" href="#安卓" aria-hidden="true">#</a> 安卓</h2><p>anbox</p><p>sudo apt install android-tools-adb</p><h2 id="vs-code" tabindex="-1"><a class="header-anchor" href="#vs-code" aria-hidden="true">#</a> VS Code</h2><p>Code runner</p><p>Go to File -&gt; Preferences -&gt; Settings. In the search bar, type in code-runner.</p><p>Now scroll down to the part where it says</p><p>Code-runner: Executor Mapand click on</p><p>Edit in settings.json.</p><p>Within the &quot;code-runner.executorMap&quot;, go to &quot;python&quot;: &quot;python -u&quot; and change it to &quot;python&quot;: &quot;python3 -u&quot;</p><h2 id="v2ray" tabindex="-1"><a class="header-anchor" href="#v2ray" aria-hidden="true">#</a> V2RAY</h2><p>sudo -i</p><p><strong>安裝和更新 V2Ray</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// 安裝執行檔和 .dat 資料檔\nbash &lt;(curl -L https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>安裝最新發行的 geoip.dat 和 geosite.dat</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// 只更新 .dat 資料檔\nbash &lt;(curl -L https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-dat-release.sh)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>移除 V2Ray</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bash &lt;(curl -L https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh) --remove\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="v2raya" tabindex="-1"><a class="header-anchor" href="#v2raya" aria-hidden="true">#</a> v2rayA</h2><ul><li><p>启动 v2rayA</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl start v2raya.service\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>设置开机自动启动</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> v2raya.service\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启v2rayA</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl restart v2raya.service\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="flatpak" tabindex="-1"><a class="header-anchor" href="#flatpak" aria-hidden="true">#</a> Flatpak</h2><p>Deepin Quick Setup</p><p>Follow these simple steps to start using Flatpak</p>',77),i=(0,n.uE)('<li><p>Install Flatpak</p><p>To install Flatpak, run the following:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> flatpak\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Add the Flathub repository</p><p>Flathub is the best place to get Flatpak apps. To enable it, run:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Install the Deepin themes</p><p>To install light and dark themes, run:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>flatpak <span class="token function">install</span> flathub org.gtk.Gtk3theme.deepin\nflatpak <span class="token function">install</span> flathub org.gtk.Gtk3theme.deepin-dark\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>',3),d=(0,n._)("p",null,"Restart",-1),l=(0,n.Uk)("To complete setup, restart your system. Now all you have to do is "),r={href:"https://flathub.org/",target:"_blank",rel:"noopener noreferrer"},p=(0,n.Uk)("install some apps"),u=(0,n.Uk)("!"),o=(0,n.uE)('<h2 id="fstab" tabindex="-1"><a class="header-anchor" href="#fstab" aria-hidden="true">#</a> Fstab</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vi /etc/fstab\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>路径名有空格</strong></p><p>如果挂载的路径中有空格，可以使用 &quot;\\040&quot; 转义字符来表示空格（以三位八进制数来进行表示）</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/etc/fstab\nUUID=47FA-4071     /home/username/Camera\\040Pictures   vfat  defaults,noatime      0  2\n/dev/sda7          /media/100\\040GB\\040(Storage)       ext4  defaults,noatime,user  0  0\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> Ubuntu</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> add-apt-repository universe\n<span class="token function">sudo</span> add-apt-repository multiverse\n<span class="token function">sudo</span> <span class="token function">apt</span> update\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装媒体解码器来播放 MP3、MPEG4 和其他格式媒体文件</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> ubuntu-restricted-extras\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="python插件" tabindex="-1"><a class="header-anchor" href="#python插件" aria-hidden="true">#</a> Python插件</h1><p>pyinstxtractor</p><p>0x01 安装</p><p>项目地址：</p><p>https://sourceforge.net/projects/pyinstallerextractor/</p><p>进入后点击“Download”下载pyinstxtractor.py，即可。</p><p>0x02 使用方法</p><p>把pyinstxtractor.py和exe文件放在同个目录下</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>python pyinstxtractor.py xx.exe              \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行后生成xx.exe_extracted文件夹，进去后是各种文件，</p><p>瞄准一些无后缀文件（至于是哪些就看自己尝试了），其实是少了pyc头的pyc文件</p><p>可以尝试在前面增加03f30d0a21f8eb5a这个pyc头，然后增加文件名的后缀.pyc</p><p>之后就可以尝试用uncompyle2来对pyc文件进行反编译。</p><p><strong>uncompyle6</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ncompyle6 xx.pyc &gt; xx.py              \ndecompyle3 xx.pyc &gt; xx.py             \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',24),c={},v=(0,s(83744).Z)(c,[["render",function(e,a){const s=(0,n.up)("ExternalLinkIcon");return(0,n.wg)(),(0,n.iD)("div",null,[t,(0,n._)("ol",null,[i,(0,n._)("li",null,[d,(0,n._)("p",null,[l,(0,n._)("a",r,[p,(0,n.Wm)(s)]),u])])]),o])}]])},83744:(e,a)=>{a.Z=(e,a)=>{const s=e.__vccOpts||e;for(const[e,n]of a)s[e]=n;return s}},9374:(e,a,s)=>{s.r(a),s.d(a,{data:()=>n});const n=JSON.parse('{"key":"v-544d4cfd","path":"/tech/Deepin&Ubuntu.html","title":"Deepin","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[{"level":1,"title":"Deepin","slug":"deepin","children":[]},{"level":1,"title":"Ubuntu","slug":"ubuntu","children":[]},{"level":1,"title":"Python插件","slug":"python插件","children":[]}],"git":{"updatedTime":1652661601000,"contributors":[{"name":"jiange1236","email":"183465355@qq.com","commits":2}]},"filePathRelative":"tech/Deepin&Ubuntu.md"}')}}]);