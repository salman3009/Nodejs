const fs = require('fs');

console.log("line 1");

const readFile =()=>{
//async 
fs.readFile('./data/input.txt',(err,data)=>{
    if(err){
       console.log("some error occur");
       return;
    }
    //buffer to unicode character
    console.log(data.toString());
})
}
// readFile();

const writeFile=()=>{
    const input = "Welcome to javascript and angular";
     fs.writeFile('./data/read.txt',input,(err)=>{
        if(err){
            return console.log(err);
        }
        console.log("file created successfully");
     })
}
// writeFile();
console.log("line 12");

const readFileSync=()=>{
    return fs.readFileSync('./data/input.txt').toString();
}



const appendFile=()=>{
     
    fs.appendFile('./data/read.txt',readFileSync(),'utf8',(err)=>{
        if(err){
           return console.log(err);
        }
        console.log("file appended successfully");
    })
}
appendFile();