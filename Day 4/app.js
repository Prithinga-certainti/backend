const express = require('express')
const app= express()
const router=require('./routers/router')
const PORT=process.env.PORT || 3001
app.use(express.json())
app.use('/job',router)
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

