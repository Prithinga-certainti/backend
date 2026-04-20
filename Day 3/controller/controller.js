const service =require('../service/service')

const getorders=(req,res,next)=>{
    try{
        const result=service.getorders()
        res.send(result)
    }catch(error){
        res.status(500).send(error.message)
    }
    next()
}
const getorderbyid=(req,res,next)=>{
    try{
        const id=parseInt(req.params.id)
        const result=service.getorderbyid(id)
        res.send(result)
    }catch(error){
        res.status(500).send(error.message)
    }
    next()
}
const createorder=(req,res,next)=>{
    try{
        const data=req.body
        const result=service.createorder(data)
        res.send(result)
    }catch(error){
        res.status(500).send(error.message)
    }
    next()
}
const cancelorder=(req,res,next)=>{
    try{
        const id=parseInt(req.params.id)
        const result=service.cancelorder(id)
        res.send(result)
    }catch(error){
        res.status(500).send(error.message)
    }
    next()
}
module.exports={getorders,getorderbyid,createorder,cancelorder}