const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Employee = require('./models/employee');

//database name - credo
mongoose.connect("mongodb://localhost:27017/credo").then(()=>{
    console.log("connected");
}).catch(()=>{
    console.log("failed");
})

app.use(express.json());

app.post('',async (req,res)=>{
    
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

app.get('', async (req,res)=>{
   try{

    const result = await Employee.find();


    res.status(200).json(result);

   }catch(err){
    res.status(400).json({
        err:err
     })
   }

})

app.delete('/:id',async (req,res)=>{
      try{

        await Employee.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"Data is deleted successfully"});
      }catch(err){
        res.status(400).json({
            err:err
        })
      }
})

app.put('/:firstName', async (req,res)=>{
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

app.listen(3000,()=>{
 console.log("server is running");
});