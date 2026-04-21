const express =require('express')
const router=express.Router()
const reportcontroller=require('../controller/controller')
router.get('/',reportcontroller.getreports)
router.post('/',reportcontroller.createreport)
router.get('/:id',reportcontroller.getidbyreports)
module.exports=router;
