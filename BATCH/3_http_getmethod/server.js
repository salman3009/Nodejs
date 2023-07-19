const http = require('http');

const server = http.createServer((req,res)=>{
  //req object anything that is coming from frontend
  //res we are sending data to frontend


// res.writeHead(200,{'Content-Type':'text/html'});
// res.end("<h1>Hello world</h1>");

//   res.writeHead(200,{'Content-Type':'application/json'});
//   res.end('{"fullName":"akash","type":"chennai"}');

res.writeHead(200,{'Content-Type':'text/plain'});
res.end('file is reading');


});

server.listen(3000,()=>{
    console.log("server is listening on 3000");
})