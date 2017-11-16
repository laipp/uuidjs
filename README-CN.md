# uuidjs

[![Build Status](https://travis-ci.org/lonly197/uuidjs.svg?branch=master)](https://travis-ci.org/lonly197/uuidjs)

UUID.js - 用于生成符合RFC 4122的UUID的JavaScript库

[English Docment](./README.md)

## 安装

下载 lib/index.js or 执行 npm install lonly-uuidjs.

然后, 在家 lib/index.js.

```JavaScript
<script src="src/uuid.js"></script>
```
Or, 引入 uuidjs.

```JavaScript
import UUID from "lonly-uuidjs"
```

## 使用事例

UUID.generate 方法 会返回以十六进制字符串的形式的版本4UUID.

```JavaScript
// Create a version 4 UUID as a hexadecimal string
console.log(UUID.generate);   // fa84cf42-ffdf-4975-b42b-31ab5fb983eb
```

## 作者

Lonly <lonly197@gmail.com> 