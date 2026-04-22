const student=[
    {
        id:101,
        courseName:'Nodejs',
        duration:'180days',
        trainer:"Prithinga Senthilkumar"
    },
    {
        id:102,
        courseName:'Reactjs',
        duration:'180days',
        trainer:"Vellvizhi"
    },
    {
        id:103,
        courseName:'Javascript',
        duration:'180days',
        trainer:"MathiArasi"
    }
]
const enrollment=[
    {
        id:101,
        courseid:201
    },
    {
        id:102,
        courseid:202
    },
    {
        id:103,
        courseid:203
    }
]
const createdStudent=(data)=>{
    const newStudent={
        id:data.id,
        name:data.name,
        duration:data.duration,
        trainer:data.trainer
    }
    student.push(newStudent)
    return newStudent   
}
const getStudents=()=>{
    return student
}
const getidbystudents=(id)=>{
    const result=student.find(s=>s.id===id)
    if(!result){
        throw new Error("Student Not Found")
    }
    return result
}
const updateStudent=(id,data)=>{
    const index=student.findIndex(s=>s.id===id)
    if(index===-1){
        throw new Error("Student Not Found")
    }
    student[index]={...student[index],...data}
    return student[index]
}
const deleteStudent=(id)=>{
    const index=student.findIndex(s=>s.id===id)
    if(index===-1){
        throw new Error("Student Not Found")
    }
    const deletedStudent=student.splice(index,1)
    return deletedStudent[0]
}                       

const createcourse=(data)=>{
    const newcourse={
        id:data.id,
        courseid:data.courseid
    }
    enrollment.push(newcourse)
    return newcourse
}
const getcourse=()=>{
    return enrollment
}
module.exports={createdStudent,getStudents,getidbystudents,updateStudent,deleteStudent,createcourse,getcourse} 