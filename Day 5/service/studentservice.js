const repository=require('../repository/studentrepository')
const getstudents=()=>{
    const result=repository.getstudents()
    if(result.length==0){
        throw new Error("No Students Found")
    }
    return result
}
const createdStudent=(data)=>{
    if(!data.id || !data.name || !data.email ||  !data.department){
        throw new Error("All fields are required")
    }
    const result=repository.createdStudent(data)
    if(!result){
        throw new Error("Student Not Created")
    }
    return result
}
const getidbystudents=(id)=>{
    const result=repository.getidbystudents(id)
    if(!id){
        throw new Error ("Id is required")
    }
    const student=repository.getidbystudents(id)
    if(!student){
        throw new Error("Student Not Found")
    }
    return student
}
const updateStudent=(id,data)=>{
    if(!id){
        throw new Error ("Id is required")
    }
    if(!data){
        throw new Error("Data is required")
    }
    const result=repository.updateStudent(id,data)
    if(!result){
        throw new Error("Student Not Updated")
    }
    return result
}
const deleteStudent=(id)=>{
    if(!id){
        throw new Error("Id is required")
    }
    const result= repository.deleteStudent(id)
    if(!result){
        throw new Error("Student not deleted")

    }
    return result
}
const createcourses=(data)=>{
    if(!data.id || !data.courseName || !data.duration || !data.trainer){
        throw new Error("All fields are required")
    }
    const result=repository.createcourse(data)
    if(!result){
        throw new Error("Course not created")
    }
    return result
}
const getcourse=()=>{
    const result=repository.getcourse()
    if(result.length==0){
        throw new Error("No courses found")
    }
    return result
}
const createEnrollment=(data)=>{
    if(!data.id || !data.courseid){
        throw new Error("All fields are required")
    }
    const result=repository.createEnrollment(data)
    if(!result){
        throw new Error ("Enrollment not created")
    }
    return result
}
module.exports={getstudents,createdStudent,getidbystudents,updateStudent,deleteStudent,createcourses,getcourse,createEnrollment}