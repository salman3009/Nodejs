const express = require('express');
const app = express(); 
const path = require('path')

app.use(express.urlencoded());
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'public')))

app.post('/', function (req, res) {
    console.log(req.body);
    res.end();
});

app.listen(3000,()=>{
    console.log("server is running on 3000");
})