const express = require('express');
const app = express();
const mongoose = require('mongoose');


//database name - credo
mongoose.connect("mongodb://localhost:27017/credo").then(()=>{
    console.log("connected");
}).catch(()=>{
    console.log("failed");
})

app.post('',(req,res)=>{

})

app.get('',(req,res)=>{

})

app.listen(3000,()=>{
 console.log("server is running");
});