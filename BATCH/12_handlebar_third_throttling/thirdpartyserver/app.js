const request = require('request');
let url = 'https://jsonplaceholder.typicode.com/todos/1';
const express = require('express');
const app = express();





app.get('/', async (req,res)=>{
   let result = await thirdParty();
    res.send(`request is made to our application ${result}`)
});

function thirdParty(){
    return new Promise((resolve,reject)=>{
        request(url,(err,res,body)=>{
            if(err){
                reject(err);
            }
            resolve(body);
        })
    })
}
app.listen(3000);