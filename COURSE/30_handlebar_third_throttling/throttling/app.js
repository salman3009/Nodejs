const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();
let count = 0;

app.use(
    rateLimit({
        windowMs:60*1000, //1minute,
        max:5,
        message:'Too many request made from this IP, please try again after 1minute'
    })
);


app.get('/',(req,res)=>{
    count++;
    res.send(`request is made to our application ${count}`)
});

app.listen(3000);