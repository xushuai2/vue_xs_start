# vue_xs_start
vue学习:

>>npm

允许用户从NPM服务器下载别人编写的第三方包到本地使用。
允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用


>>npm命令

npm -v 来测试是否成功安装
查看当前目录已安装插件：npm list
更新全部插件： npm update [ --save-dev ]
使用 npm 更新对应插件： npm update <name> [ -g ] [ --save-dev]
使用 npm 卸载插件： npm uninstall <name> [ -g ] [ --save-dev ]

>>cnpm

淘宝团队做的国内镜像，因为npm的服务器位于国外可能会影响安装。淘宝镜像与官方同步频率目前为 10分钟 一次以保证尽量与官方服务同步。
安装：命令提示符执行
npm install cnpm -g --registry=https://registry.npm.taobao.org
cnpm -v 来测试是否成功安装
通过改变地址来使用淘宝镜像
npm的默认地址是https://registry.npmjs.org/
可以使用npm config get registry查看npm的仓库地址
可以使用npm config set registry https://registry.npm.taobao.org来改变默认下载地址，达到可以不安装cnpm就能采用淘宝镜像的目的，然后使用上面的get命令查看是否成功。

>>nrm

nrm包安装命令： npm i nrm -g
nrm能够管理所用可用的镜像源地址以及当前所使用的镜像源地址，但是只是单纯的提供了几个url并能够让我们在这几个地址之间方便切换
nrm ls即nrm list，查看所有可用的镜像，并可以切换。*号表示当前npm使用的地址，可以使用命令nrm use taobao或 nrm use npm来进行两者之间的切换。

