const path = require('path');

let myPath = path.join(__dirname, '../','./path.js')
console.log(path.parse(myPath).dir)