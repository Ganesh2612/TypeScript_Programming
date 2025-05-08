// file-io.ts
import * as fs from 'fs';

// WRITE to a file (sync)
fs.writeFileSync('output.txt', 'Hello from TypeScript!');

// READ from a file (sync)
const data = fs.readFileSync('output.txt', 'utf-8');
console.log("File Content:", data);

// APPEND to a file (sync)
fs.appendFileSync('output.txt', '\nAppended Line');
