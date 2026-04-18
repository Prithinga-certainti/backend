//controller for getuser and createuser
const service = require('../service/service')

const getuser=(req,res)=>{
    try{
        const result=service.getuser()
        res.send(result)
    }
    catch(error){
        res.send({error: error.message})
    }
}

const createuser=(req,res)=>{
    try{
        const data=req.body
        const result=service.createuser(data)
        res.send(result)
    }
    catch(error){
        res.send({error: error.message})
    }
}

module.exports={getuser,createuser}
