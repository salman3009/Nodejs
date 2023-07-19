const express = require('express');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

let csrfProtection = csrf({cookie:true});
let parseForm = bodyParser.urlencoded({extended:false});


let app = express();
app.set('view engine','ejs');

app.use(cookieParser());

app.get('/form',csrfProtection,(req,res)=>{
     res.render('login',{csrfToken:req.csrfToken()})
})

app.post('/process',parseForm,csrfProtection,(req,res)=>{
      try{
        console.log(req.body);
     res.send("successfully validated");
      }catch(err){
        res.send("invalid html");
      }
})



app.listen(3000);