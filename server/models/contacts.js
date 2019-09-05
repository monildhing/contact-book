const mongoose=require('mongoose')

const Schema=mongoose.Schema
const contactschema=new Schema({
    name:String,
    phone:Number,
    email: String,
    address: String,
    // image: Image,

    
})
module.exports= mongoose.model('contact',contactschema,'contacts')