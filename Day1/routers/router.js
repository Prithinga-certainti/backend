const express= require('express')
const router=express.Router();
const {getuser,createuser}=require('../controller/controller')
router.get('/getuser',getuser)
router.post('/createuser',createuser)

module.exports= router;

