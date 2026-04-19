const express=require('express')
const router=express.Router()
const{getproducts,getidbyproducts,createproducts,updateproducts,deleteproducts}=require('../controller/controller')
router.get('/getproducts',getproducts)
router.get('/getidbyproducts/:id',getidbyproducts)
router.post('/createproducts',createproducts)
router.put('/updateproducts/:id',updateproducts)
router.delete('/deleteproducts/:id',deleteproducts)

module.exports=router;
