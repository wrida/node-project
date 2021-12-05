const fs = require('fs');

const readingFromFile = fs.readFileSync('./test.txt')
console.log(readingFromFile.toString())
const lines = readingFromFile.toString().split('\n').length - 1;
console.log(lines)
const str = Buffer.toString()
