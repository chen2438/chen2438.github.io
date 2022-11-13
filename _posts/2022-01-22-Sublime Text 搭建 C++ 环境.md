---
layout:     post
title:      Sublime Text 搭建 C++ 环境
subtitle:   
date:       2022.01.22
author:     追殇
header-img: 
catalog:   true
tags:
    - C++
---
## 一、下载`MinGW`文件

1、下载`mingw-get-setup`：
网址：`https://sourceforge.net/projects/mingw/`
由于这是境外网站，请自行解决连接问题（下载的文件仅84.5KB）
![在这里插入图片描述](https://img-blog.csdnimg.cn/453e8a727c8b48cdbd999743b28e21be.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6L-954O9,size_20,color_FFFFFF,t_70,g_se,x_16)

2、双击运行，一直`continue`
![在这里插入图片描述](https://img-blog.csdnimg.cn/4c8c69072da640f3819b203ccd2a2ab4.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6L-954O9,size_20,color_FFFFFF,t_70,g_se,x_16)

3、安装完成后显示`MinGW Installation Manager`的页面
![在这里插入图片描述](https://img-blog.csdnimg.cn/001b07f3f24a409f99a602c920b70204.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6L-954O9,size_20,color_FFFFFF,t_70,g_se,x_16)
4、单击`mingw32-base`和`mingw-gcc-g++`左边的方框，选择`Mark for installation`
![在这里插入图片描述](https://img-blog.csdnimg.cn/111edf7e372d49d9843dda25a02d0318.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/6c44384f1c534bc7b7c5b79244a71c0c.png)
5、单击菜单栏左上角`Installation`，选择`Apply Changes`
![在这里插入图片描述](https://img-blog.csdnimg.cn/13ca02e4cda7413d8bb8543b66671abd.png)
6、在弹出来的界面单击`Apply`
![在这里插入图片描述](https://img-blog.csdnimg.cn/e291b38093154701a4bcc30037613896.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6L-954O9,size_20,color_FFFFFF,t_70,g_se,x_16)
7、等待下载完成（图示为正在下载）
![在这里插入图片描述](https://img-blog.csdnimg.cn/f88304b0dc154c359e9aac4b583faa39.png)
8、下载完成，`Close`退出
![在这里插入图片描述](https://img-blog.csdnimg.cn/54733086aa5145499cb983b7610d3288.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6L-954O9,size_20,color_FFFFFF,t_70,g_se,x_16)

## 二、添加环境变量（以Win11为例）

1、右键`此电脑`，选择`属性`。
![在这里插入图片描述](https://img-blog.csdnimg.cn/d7a61a146e2241319a111d4c430360db.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6L-954O9,size_16,color_FFFFFF,t_70,g_se,x_16)
2、在相关链接里选择`高级系统设置`
![在这里插入图片描述](https://img-blog.csdnimg.cn/9560665381dc4ec7bb2c01a98d2bd5d5.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6L-954O9,size_20,color_FFFFFF,t_70,g_se,x_16)
3、在弹出的窗口单击`环境变量`
![在这里插入图片描述](https://img-blog.csdnimg.cn/0cff7d2984c443c2a8067fe033566f0c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6L-954O9,size_20,color_FFFFFF,t_70,g_se,x_16)
4、单击选中`系统变量`里的`Path`，然后单击`编辑`
![在这里插入图片描述](https://img-blog.csdnimg.cn/5c4db571dd2f4a86bfe3bbf02e9a1b45.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6L-954O9,size_20,color_FFFFFF,t_70,g_se,x_16)

5、在弹出的窗口单击`新建`，并输入你安装`MingGW`的地址，后面加一个`/bin`（二进制文件）
我是`C:\MinGW\bin`
![在这里插入图片描述](https://img-blog.csdnimg.cn/f559c45017584d51ac6a75591297e042.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6L-954O9,size_20,color_FFFFFF,t_70,g_se,x_16)
5.5 连续点击`确定`以保存刚才的操作

6、右击`Win徽标键`，选择`Windows 终端（管理员）`，输入`gcc -v`
如果有以下样式反馈说明环境变量配置成功
![在这里插入图片描述](https://img-blog.csdnimg.cn/c0b7e04eeb9e47fb99f0d7b8d50ec222.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/97a820daa77f45f7977f351676d12755.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6L-954O9,size_20,color_FFFFFF,t_70,g_se,x_16)

## 三、配置Sublime Text

1、下载并安装`Sublime`
官网：`https://www.sublimetext.com/`
不演示安装过程，中途勾选`add to explorer context menu`，意思是右键菜单会出现“Open with Sublime Text”（用Sublime打开）的选项
2、找到你刚才设置的`Sublime Text`安装目录，打开`sublime_text.exe`（sublime本体）
![在这里插入图片描述](https://img-blog.csdnimg.cn/1936fdfb9a65492284b45571631cceba.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6L-954O9,size_20,color_FFFFFF,t_70,g_se,x_16)
你会发现软件是英文的，如果需要汉化，可自行搜索
3、单击菜单栏的`Tools`，选择`Build System` - `New Build System`
![在这里插入图片描述](https://img-blog.csdnimg.cn/aa4a52da38944b0ab2fa8dfa649bd2e7.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6L-954O9,size_20,color_FFFFFF,t_70,g_se,x_16)
4、用以下代码替换`untitled.sublime-build`文件中的所有内容

```javascript
{
    "cmd": ["g++", "-Wall", "${file}","-std=c++11", "-fexec-charset=gbk", "-o","${file_path}/${file_base_name}"],
    "file_regex": "^(..[^:]*):([0-9]+):?([0-9]+)?:?(.*)$",
    "working_dir": "${file_path}",
    "selector": "source.c, source.c++",
    "shell": true,
    "encoding":"cp936",
    "variants":
    [
        {
            "name": "Compile Only",
            "cmd": ["cmd","/C","g++", "-Wall", "${file}","-std=c++11", "-fexec-charset=gbk", "-o","${file_path}/${file_base_name}"],
        },
        {
            "name": "Run Only",
            "cmd": ["start","cmd","/c", "${file_base_name} & echo. & pause"],
        },
        {
            "name": "Compile & Run",
            "cmd": ["cmd","/C","g++", "-Wall", "${file}","-std=c++11", "-fexec-charset=gbk", "-o","${file_path}/${file_base_name}", "&&","start","cmd","/c", "${file_base_name} & echo. & pause"],
        }
    ]
}
```
5、`Ctrl + S`保存，命名文件为`CPP.sublime-build`（建议）
![在这里插入图片描述](https://img-blog.csdnimg.cn/48108bc2aff2483fbfc423acc66ec347.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6L-954O9,size_20,color_FFFFFF,t_70,g_se,x_16)
6、在`Tools`-`Build System`中选择`CPP`（你刚才设置的文件名）
![在这里插入图片描述](https://img-blog.csdnimg.cn/bc316d1139a64f949110ae20ba3841b1.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6L-954O9,size_20,color_FFFFFF,t_70,g_se,x_16)

7、用`sublime`打开一个`.cpp`文件，选择`Tools` - `Build With...`
![在这里插入图片描述](https://img-blog.csdnimg.cn/ce7cce3d93304f97984975c2bda3dae5.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6L-954O9,size_15,color_FFFFFF,t_70,g_se,x_16)
8、此时有两个选项，第一个选项表示`编译`，第二个选项表示`编译并在CMD运行`。
![在这里插入图片描述](https://img-blog.csdnimg.cn/ed4fd42ba54a432caf899ec3c27c720f.png)
9、运行结果如图。
![在这里插入图片描述](https://img-blog.csdnimg.cn/6a36e2f4622344a19c8d5041f54ecfd8.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6L-954O9,size_20,color_FFFFFF,t_70,g_se,x_16)

