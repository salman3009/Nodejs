const mongoose = require('mongoose');


const employeeSchema = mongoose.Schema({
    firstName:{type:String,required:[true,'firstName should be mandatory']},
    age:{type:Number,required:[true,'age should be mandatory'],min:[18,'Age must be above 18']},
    salary:{type:Number,required:[true,'salary must be given']},
    status:{type:Boolean,default:false},
    address:{type:Object, default: {city: 'chennai'}}
})

module.exports = mongoose.model('employee',employeeSchema);