"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// file-io.ts
var fs = require("fs");
// WRITE to a file (sync)
fs.writeFileSync('output.txt', 'Hello from TypeScript!');
// READ from a file (sync)
var data = fs.readFileSync('output.txt', 'utf-8');
console.log("File Content:", data);
// APPEND to a file (sync)
fs.appendFileSync('output.txt', '\nAppended Line');
