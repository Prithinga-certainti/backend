const express = require('express')
const app=express()
const router=require('./router/router')
const port=process.env.PORT || 3002
app.use(express.json())
app.use('/orders',router)
app.listen(port,()=>{
console.log(`server is running in the port ${port}`)
})  

