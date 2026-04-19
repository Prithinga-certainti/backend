const express = require('express')
const app=express()
const router=require('./router/router')

const port=process.env.port || 3001

app.use(express.json())
app.use('/api',router)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})  