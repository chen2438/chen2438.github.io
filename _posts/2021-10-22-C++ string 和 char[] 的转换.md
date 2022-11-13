---
layout:     post
title:      C++ string 和 char[] 的转换
subtitle:   
date:       2021.10.22
author:     追殇
header-img: 
catalog:   true
tags:
    - C++
---
#### 一、char[ ] 转 string

可以直接赋值

#### 二、string 转 char[ ]

```cpp
	string str="Hello, world!";
    char s[100];
    for(int i=0;i<str.length();i++)
        s[i]=str[i];
    //p[i] = '\0';
```
