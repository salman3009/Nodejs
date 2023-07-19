const http = require('http');
let factor = 0;
const server = http.createServer((req,res)=>{
 

    if(req.method === 'GET'){
        res.writeHead(200,{'Content-Type':'text/html'});
        console.log(factor);
        res.end(factor.toString());
    }

    if(req.method === 'POST'){
        req.on('data',(chunks)=>{
            let result = Buffer.from(chunks);
            //take data in buffer format
            result = result.toString();
            //it will be in json format
            const {age} = JSON.parse(result);
            //convert into normal javascript object
            factor = age;
            if(age>20 && age < 40){
                res.writeHead(200,{'Content-Type':'text/plain'});
                return res.end("senior citizen");
            }
            if(age<=20){
                res.writeHead(200,{'Content-Type':'text/plain'});
                return res.end("children");
            }
            res.writeHead(400,{'Content-Type':'text/plain'});
            return res.end("no match found");
          

        })
    }

   

})

server.listen(3000,()=>{
    console.log("server is runnin on 3000");
})