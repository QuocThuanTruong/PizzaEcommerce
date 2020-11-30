const express = require('express');
const router = express.Router();
const list = require('../models/pizzaModel');

router.post('/',(req,res,next)=>
{
   res.render('pizza/detail');
})

module.exports=router;