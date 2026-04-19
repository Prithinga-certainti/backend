//service layer for products

const data=[
    {
        id:1,
        name:'laptop',
        price:50000
    },
    {
        id:2,
        name:'mobile',
        price:20000
    }
]

const getproducts=()=>{
    return data
}

const getidbyproducts=(id)=>{
    const product=data.find(p=>p.id===id)
    if(!product){
        throw new Error('product not found')
    }
    return product
}

const createproducts=(product)=>{
    if(!product.name || !product.price){
        throw new Error('name and price are required')
    }
    const id=data.length+1
    product.id=id
    product.name=product.name
    product.price=product.price
    data.push(product)
    return product
}


const updateproducts=(id,product)=>{
    const index=data.findIndex(p=>p.id===id)
    if(index===-1){
        throw new Error('product not found')
    }
    data[index]={id,...product}
    return data[index]      
}

const deleteproduct=(id)=>{
    const index=data.findIndex(p=>p.id===id)
    if(index===-1){
        throw new Error('product not found')
    }
    data.splice(index,1)
    return {message:'product deleted successfully'}
}

module.exports={getproducts,getidbyproducts,createproducts,updateproducts,deleteproduct}

