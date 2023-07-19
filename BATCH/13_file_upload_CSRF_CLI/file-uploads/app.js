const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');

app.use(fileUpload());

app.post('/upload',(req,res)=>{
    
    if(req.files){

        const uploadedFile = req.files.uploadFile;

        console.log(uploadedFile);

        const uploadPath = __dirname + "/uploads/"+ uploadedFile.name;
        uploadedFile.mv(uploadPath,(err)=>{
            if(err){
                res.send("failed");
            }
            else{
                res.send("successfully uploaded");
            }
        })   
    }else{
     res.send("no file uploaded");
    }   
});

app.get('/download',(req,res)=>{
      res.download(__dirname+"/uploads/notes.txt",(err)=>{
        if(err){
            console.log("error",err);
            res.send("failed");
        }    
      })
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.listen(3000);