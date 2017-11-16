# uuidjs

[![Build Status](https://travis-ci.org/lonly197/uuidjs.svg?branch=master)](https://travis-ci.org/lonly197/uuidjs)

UUID.js - A JavaScript library to generate RFC 4122 compliant UUID

## INSTALL

Download lib/index.js or call npm install lonly-uuidjs.

Then, load lib/index.js.

```JavaScript
<script src="src/uuid.js"></script>
```
Or, import uuidjs.

```JavaScript
const UUID = require("lonly-uuidjs")
```

## USAGE EXAMPLES

UUID.generate() returns a version 4 UUID as a hexadecimal string.

```JavaScript
// Create a version 4 UUID as a hexadecimal string
console.log(UUID.generate());   // fa84cf42-ffdf-4975-b42b-31ab5fb983eb
```

## AUTHOR

Lonly <lonly197@gmail.com> 