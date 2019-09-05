const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const api = require('./routes/api')
const app=express()
const port=3000
app.use(bodyParser.json())
app.use(cors())
app.use('/api',api)
app.get('/',function(req,res){
    res.send('server')
})
app.listen(port,()=>{
    console.log(port)
})