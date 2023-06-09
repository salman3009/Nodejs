import { RequestHandler } from 'express';
import Todo from '../models/todo';
const redis=require('redis');
const redis_port=6379;
const client=redis.createClient(redis_port);

client.on("error", (err:any) => {
   console.log("error from redix",err);
});

export const getTodos: RequestHandler = async (req, res, next) => {
   try{
      let data
      const id=req.params.id;
      if(id){
         data= await Todo.find({id:id});
      }else{
          data= await Todo.find();
      }
      client.setex(id, 600, JSON.stringify(data));
      res.status(200).json({ message: 'sample data',todo:data});
   }catch(err){
      console.log("coming to here");
    res.status(400).json({ message: err});
   }  
};


export const cache: RequestHandler = async (req, res, next) => {
   try{
      const id=req.params.id;
      console.log("coming here",id);
    client.get(id,(err:any,data:any)=>{
       if(err){
          console.log("error",err);
          throw err;
       }
       console.log("data value",data);
       if(data!=null){
          console.log("send from cache");
         res.status(200).json({ message: 'sample data',todo:JSON.parse(data)});
       }else{
          console.log("going next");
          next();
       }
    })
     
   }catch(err){
      console.log("typeof erro",err);
    res.status(400).json({ message: err});
   }  
};


