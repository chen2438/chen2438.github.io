---
layout:     post
title:      C++ string 和 int 的相互转换
subtitle:   
date:       2021.11.03
author:     追殇
header-img: 
catalog:   true
tags:
    - C++
---
### 一、int 转 string

(1) **使用字符串流**，需包含头文件 `#include<sstream>`，使用空间标示符`std::`或者头命名空间`using namespace std;`
```cpp
#include<iostream>
#include<sstream>
#include<cstring>
using namespace std;
int main(){
    int num=123;
    stringstream str1;
    str1<<num;//不能反过来写,字符串流对象在前
    string str2;
    str2=str1.str();
    cout<<str2;
    return 0;
} 
```
(2)**使用 `to_string` 函数**（C++11）
同样需要`std::`
在 Dev-C++ 中，可能需要升级编译器版本才能正常运行
```cpp
#include<iostream>
#include<cstring>
using namespace std;
int main(){
    int num=123;
    string str2;
    str2=to_string(num);
    cout<<str2;
    return 0;
} 
```

### 二、string 转 int
(1) **使用字符串流**，需包含头文件 `#include<sstream>`，使用空间标示符`std::`或者头命名空间`using namespace std;`

```cpp
#include<iostream>
#include<cstring>
#include<sstream>
using namespace std;
int main(){
    string str1="123";
    istringstream str2(str1);
    int num;
    str2>>num;//不能反过来写,字符串流对象在前
    cout<<num;
    return 0;
}
```

(2)**使用`atoi()` , `atol()` , `atof()` 等**
在部分OJ网站中可能无法编译成功。

```cpp
#include<iostream>
#include<cstring>
using namespace std;
int main(){
    string str="123";
    int num;
    num=atoi(str.c_str());
    cout<<num; 
    return 0;
} 
```
**`atoi()`也可以转换字符数组`char[]`**

```cpp
#include<iostream>
#include<cstring>
using namespace std;
int main(){
    char str[100]={'1','2','3'};
    int num;
    num=atoi(str);
    cout<<num; 
    return 0;
} 
```
