//service for getuser and  createuser

const data=[
    {
        id:1,
        name:'prithingasenthilkumar',
        email:'prithingasenthilkumar@gmail.com'
    }
]

const createuser=(user)=>{

    if(!user.name || !user.email){
            throw new Error('name and email are required')
        }
        return { error: error.message }
    }
    data.push(user)
    return user
const getuser=()=>{
    return data
}

module.exports={getuser,createuser}

