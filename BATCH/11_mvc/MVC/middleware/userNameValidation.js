


module.exports=(req,res,next)=>{
       
    if(req.body.userName){
        next();
    }
    else{
        res.status(400).json({
            message:"userName is not found"
        })
    }
}