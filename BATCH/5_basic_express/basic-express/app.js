const express = require('express');
const app = express();

let products =[
    {
        id:1,
        name:"lenevo",
        price:20000,
        availability:true
    },
    {
        id:2,
        name:"apple",
        price:200000,
        availability:false
    }
]

//middleware
//all incoming request will pass through this function
app.use((req,res,next)=>{
    console.log("first middleware");
    next();
})

//to parse json data
app.use(express.json());


//api to get the details
app.get('',(req,res)=>{
    //req - request object 
    //res - response object
     res.send("<h1>Welcome to first express app</h1>");
})

app.get('/product',(req,res)=>{
   res.status(200).json({
    message:"fetching is successfull",
    product:products
   })
})

app.post('/product',(req,res)=>{
    console.log(req.body);
    let id = products.length + 1;
    products.push({id,...req.body});
    res.status(201).json({
        message:"Data is created"
    })
})

//params
app.delete('/:id',(req,res)=>{
    console.log(req.params);
    let id = Number(req.params.id);
    let result = products.filter((obj)=>obj.id === id);
    console.log(result);
    if(result.length>0){
        products = products.filter((obj)=>obj.id != id);
        res.status(200).json({
            message:"Data is deleted successfully"
        })
    }else{
        res.status(400).json({
            message:"Not able to find the id"
        })
    }
    
})


//please hit http://localhost:3000
app.listen(3000,()=>{
    console.log('server is running on 3000');
})