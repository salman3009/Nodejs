const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    let result = fs.readFileSync('./input.txt').toString();
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end(result);
})


server.listen(3000,()=>{
    console.log("server is listenining on 3000");
})