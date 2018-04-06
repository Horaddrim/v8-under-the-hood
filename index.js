const esprima = require('esprima');
const { readFileSync } = require('fs');

const file = readFileSync('./samples/index.js').toString();

const ast = esprima.parseScript(file);
console.log(ast);
