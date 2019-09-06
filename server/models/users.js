const mongoose=require('mongoose')

const Schema=mongoose.Schema
const userschema=new Schema({
    email: String,
    password: String,
    contact: [{
    name:String,
    phone:Number,
    email: String,
    address: String,
    uemail:String
    }]
})


module.exports= mongoose.model('user',userschema,'users')