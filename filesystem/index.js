const fs = require('fs');
const path = require('path');

const ini = path.resolve(__dirname, 'notes.txt');
const data = fs.readFileSync(ini, 'UTF-8');
console.log(data);
console.log(ini);