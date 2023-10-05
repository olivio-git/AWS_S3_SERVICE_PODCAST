const {Router}=require('express');
const { s3 } = require('./handler');
const router=Router();

router.get('/',s3);

router.post('/upload',s3) 

module.exports=router; 