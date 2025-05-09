"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

let fs = require("fs");
fs.writeFileSync('output.txt', 'Hello from TypeScript!');

let data = fs.readFileSync('output.txt', 'utf-8');
console.log("File Content:", data);

fs.appendFileSync('output.txt', '\nAppended Line');
