const service = require('../service/service')

const getproducts=(req,res)=>{
    try{
        const result=service.getproducts()
        res.send(result)
        
    }catch(error){
        res.status(500).send(error.message)
    }
}

const getidbyproducts=(req,res)=>{
    try{
        const id = parseInt(req.params.id)
        const result=service.getidbyproducts(id)
        res.send(result)
    }catch(error){
        res.status(500).send(error.message)
    }
}

const createproducts=(req,res)=>{
    try{
        const data=req.body
        const result=service.createproducts(data)
        res.send(result)
    }catch(error){
        res.status(500).send(error.message)
    }
}

const updateproducts=(req,res)=>{
    try{
        const id=parseInt(req.paramas.id)
        const data=req.body
        const result=swrvice.updateproducts(id,data)
        res.send(result)
    }catch(error){
        res.status(500).send(error.message)
    }
}

const deleteproducts=(req,res)=>{
    try{
        const id=parseInt(req.paramas.id)
        const result=service.deleteproducts(id)
        res.send(result)
    }catch(error){
        res.status(500).send(error.message)
    }
}

module.exports={getproducts,getidbyproducts,createproducts,updateproducts,deleteproducts}