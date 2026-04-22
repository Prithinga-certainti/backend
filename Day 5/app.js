const express = require('express')
const app=express()
const router=require('./router/studentrouter')
app.use(express.json())
app.use('/students',router)
const PORT=3000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
}) 