const express = require('express')
const router=express.Router()
const ordercontroller=require('../controller/ordercontroller')
const { get } = require('node:http')
router.get('/',ordercontroller.getorders)
router.get('/:id',ordercontroller.getorderbyid)
router.post('/',ordercontroller.createorder)
router.put('/id',ordercontroller.cancelorder)
module.exports=router;
