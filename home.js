const express =require('express');
const { Router } = require('routes');
const router = express.Router();


router.get('/',(req,res,Next)=>{
    
   res.render('home.ejs');
});

module.exports = router;