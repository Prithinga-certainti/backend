const repository=require('../repository/repository')
const getreports=()=>{
    const result=repository.getreports()
    return result
}       
//GET /reports/:id → get report status
const getidbyreports=(id)=>{
    const result=repository.getidbyreports(id)
    return result
}
const createreport=(data)=>{
    const result=repository.createreport(data)
    return result
}
module.exports={getreports,getidbyreports,createreport} 