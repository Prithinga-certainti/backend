data=[
    {
        "id": 1,
        "name": "prithingasenthilkumar",
        "email": "prithii@gmail.com",
        "status": "active"
    },
    {
        "id": 2,
        "name": "vellvizhi",
        "email": "vellvizhi@gmail.com",
        "status": "inactive"
    }
]
// need to validate the status of the user (active/inactive)
// if user is active then only we can get the user details
const getidbyusers=(id)=>{
    const user=data.find(u=>u.id===id)
    if(!user){
        throw new Error('user not found')
    }
    if(user.status!=='active'){
        throw new Error('user is inactive')
    }
    return user
}
const getusers=()=>{
    return data
}
const createuser=(user)=>{
    if(!user.name || !user.email){
        throw new Error('name and email are required')
    }
    const id=data.length+1
    user.id=id
    const email=data.find(u=>u.email===user.email)
    if(email){
        throw new Error('email already exists')
    }
    data.push(user)
    return user
}

module.exports={getusers,createuser,getidbyusers}