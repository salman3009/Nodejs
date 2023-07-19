const express = require('express');
const app = express();
const parser = require('body-parser');
const path = require('path');
const userRoute = require('./routes/user');

app.use(parser.json());

app.use((req,res,next)=>{
    console.log("app.js file",__dirname);
    next();
})

app.use('',express.static(path.join(__dirname,'views')));
app.use('/api/user',userRoute);

module.exports = app;