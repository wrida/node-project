const http = require('http');

const server = http.createServer((req,res)=>{
if (req.url === '/'){
    res.write('<h1>you are at home page</h1>');
    res.end()
}
if (req.url === '/products'){
    res.write('you are at products page')
    res.end()
}
})
server.listen(7000)
console.log('welcome to our server')