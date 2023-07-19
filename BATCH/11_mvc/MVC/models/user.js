const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    roles:{type:Array,default:['users']}
});

module.exports = mongoose.model('user',userSchema);