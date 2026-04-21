const service=require('../service/service')
const getreports=(req,res)=>{
    try{
        const result=service.getreports()
        res.send(result)
    }catch(error){
        res.status(500).send(error.message)
    }
}
const createreport=(req,res)=>{
    try{
        const data=req.body
        const result=service.createreport(data)
        res.send(result)
    }catch(error){
        res.status(500).send(error.message)
    }
}
const getidbyreports=(req,res)=>{
    try{
        const id=parseInt(req.params.id)
        const result=service.getidbyreports(id)
        res.send(result)
    }catch(error){
        res.status(500).send(error.message)
    }
}

module.exports={getreports,createreport,getidbyreports}