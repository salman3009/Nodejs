const express = require('express');
const hbs = require('express-handlebars');
const app = express();
const path  = require('path');
app.engine('hbs',hbs.engine({
    defaultLayout:'main',
    extname:'.hbs'
}));

app.set('view engine','hbs');




app.get('/',(req,res)=>{
    res.render('home',{msg:'This is home page'});
})

app.get('/people',(req,res)=>{
    res.render('people',{result:[
        {name:'akash',age:34},
        {name:'suresh',age:55}
    ]});
})

app.listen(3000,()=>{
    console.log("server is running on 3000");
})