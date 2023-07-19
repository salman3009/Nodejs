const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Employee = require('./models/employee');
const User = require('./models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//database name - credo
mongoose.connect("mongodb://localhost:27017/credo").then(()=>{
    console.log("connected");
}).catch(()=>{
    console.log("failed");
})

app.use(express.json());

const validationMiddleware=(req,res,next)=>{
    try{
        const token = req.headers.authorization;
        const decode = jwt.verify(token,'credo_secret');
        console.log("decode",decode);
        req.email = decode.email;
        req.roles = decode.roles;
        next();
    }catch(err){
        res.status(400).json({
            message:"token is invalid"
        })
    }
}

const authorizationDeleteMiddleware=(req,res,next)=>{
    try{
        for(let obj of req.roles){
            console.log(obj);
            if(['admin','superadmin'].includes(obj)){
               return next();
            }
        }
        return res.status(400).json({
            message:"roles not matched"
        })
   
    }catch(err){
        res.status(400).json({
            message:"internal server error"
        })  
    }
}

app.post('',validationMiddleware,async (req,res)=>{
    
    try{
        const result = new Employee({
            firstName:req.body.firstName,
            age:req.body.age,
            salary:req.body.salary,
        })

        //it will return promise
        await result.save();

        res.status(201).json(result);


    }catch(err){
          res.status(400).json({
            err:err
         })
    }
   

})

app.get('',validationMiddleware, async (req,res)=>{
   try{

    const result = await Employee.find();


    res.status(200).json(result);

   }catch(err){
    res.status(400).json({
        err:err
     })
   }

})

app.delete('/:id',validationMiddleware,authorizationDeleteMiddleware,async (req,res)=>{
      try{

        await Employee.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"Data is deleted successfully"});
      }catch(err){
        res.status(400).json({
            err:err
        })
      }
})

app.put('/:firstName',validationMiddleware, async (req,res)=>{
    try{
        let filter={firstName:req.params.firstName};
        let query= req.body;
        let result = await Employee.findOneAndUpdate(filter,query,{new:true})
        res.status(200).json(result);

    }catch(err){
        res.status(400).json({
            err:err
        })
    }
})

app.post('/register', async (req,res)=>{

    let hashPassword = await bcrypt.hash(req.body.password,10);
    try{
        const post = new User({
            userName:req.body.userName,
            email:req.body.email,
            password:hashPassword
        });
        await post.save();

        res.status(201).json(post);
    }catch(err){
        res.status(400).json({
            err:err
        })
    }
})

app.post('/login',async (req,res)=>{
   try{
    const result = await User.findOne({email:req.body.email});
    if(!result){
        return res.status(400).json({message:"email is not found"})
    }
    console.log(req.body.password,result.password);
    let comparePassword = await bcrypt.compare(req.body.password,result.password);
    if(!comparePassword){
        return res.status(400).json({message:"password is not found"})
    }
    const token = jwt.sign({email:result.email,roles:result.roles},'credo_secret',{expiresIn:'1h'});

    return res.status(200).json({
        message:'successfully login',
        token:token
    })

   }catch(err){
    res.status(400).json({
        err:err
    })
   }  
})

app.listen(3000,()=>{
 console.log("server is running");
});