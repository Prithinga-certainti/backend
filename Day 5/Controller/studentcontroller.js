const service=require('../service/studentservice')

const createstudent=(req,res)=>{
    try{
        const data=req.body
        const result=service.createdStudent(data)
        res.send(result)
    }catch(error){
        res.status(500).send(error.message)
    }
}
const getStudents=(req,res)=>{
    try{
        const result=service.getStudents()
        res.send(result)
        }catch(error){
            res.status(500).send(error.message)
        }
}
const getidbystudents=(req,res)=>{
    try{
        const id=parseInt(req.params.id)
        const result=service.getidbystudents(id)
        res.send(result)
    }catch(error){
        res.status(500).send(error.message)
    }
}
const updateStudent=(req,res)=>{
    try{
        const id=parseInt(req.params.id)
        const data=req.body
        const result=service.updateStudent(id, data)
        res.send(result)
    }catch(error){
        res.status(500).send(error.message)
    }
}
const deleteStudent=(req,res)=>{
    try{
        const id=parseInt(req.params.id)
        const result=service.deleteStudent(id)
        res.send(result)
    }catch(error){
        res.status(500).send(error.message)
    }
}
const createcourse=(req,res)=>{
    try{
        const data=req.body
        const result=service.createservice(data)
        res.send(result)
    }catch(error){
        res.status(500).send(error.message)
    }
}
const getcourse=(req,res)=>{
    try{
        const result=service.getcourse()
        res.send(result)
    }catch(error){
        res.status(500).send(error.message)
    }
}
const createEnrollment=(req,res)=>{
    try{
        const data=req.body
        const result=service.createEnrollment(data)
        res.send(result)
    }catch(error){
        res.status(500).send(error.message)
    }
}
const getstudentbyidcourse=(req,res)=>{
    try{
        const id=parseInt(req.params.id)
        const result=service.getstudentbyidcourse(id)
        res.send(result)
    }catch(error){
        res.status(500).send(error.message)
    }
}
module.exports={createstudent,getStudents,getidbystudents,updateStudent,deleteStudent,createcourse,getcourse,createEnrollment,getstudentbyidcourse}
