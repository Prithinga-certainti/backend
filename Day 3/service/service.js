data = [
    {
        id:1,
        productid:1,
        quantity:2,
        status:'created'
    },
    {
        id:2,
        productid:2,
        quantity:1,
        status:'created'
    }
]
const getorders=()=>{
    return data
}
const getorderbyid=(id)=>{
    const order=data.find(o=>o.id===id)
    if(!order){
        throw new Error('order not found')
    }
    return order
}
const createorder=(order)=>{
    if(!order.productid || !order.quantity){
        throw new Error('productid and quantity are required')
    }
    const id=data.length+1
    order.id=id
    data.push(order)
    return order
}   
const cancelorder=(id)=>{
    const index=data.findIndex(o=>o.id===id)
    if(index===-1){
        throw new Error('order not found')
    }
    data[index].status='cancelled'
    return data[index]
}
module.exports={getorders,getorderbyid,createorder,cancelorder}