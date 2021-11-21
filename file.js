const fs = require('fs');
fs.readFile('./test.txt','utf8',(err,data)=>{
 err ? console.log(err)
 : fs.writeFile('./test2.txt',data,(err,info)=>{
     console.log(info)
 })
})
console.log('after reading file')