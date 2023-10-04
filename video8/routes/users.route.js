const express = require('express');
const router = express.Router();


router.get("/register", (req, res)=>{
    res.send("I am from get register route");
});

router.get("/login", (req, res)=>{
    res.send("I am from get login route");
});

module.exports=router;