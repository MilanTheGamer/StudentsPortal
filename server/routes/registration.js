const express = require("express");
const router = express.Router();
const register = require("../services/register");
const createId = require("../utils/createId");

router.post("/",async(req,res)=>{
    const userData = req.body;
    let registrationResponse = await  register(userData);
    if(registrationResponse){
        res.status(200).send("REGISTRATED");
    }else{
        res.status(500).send("REGISTRATION FAILED");
    }
});

router.post("/test",async(req,res)=>{
    const userData = req.body;
    let chrId = createId();
    console.log(chrId)
    res.status(200).send("OK");
});

module.exports = router;