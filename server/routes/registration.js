//Import Essential Modules
const express = require("express");
const router = express.Router();
const register = require("../services/register");
const sendEmail = require("../utils/sendEmail");

//Setup file multer settings
const multer = require("multer");
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,`${__dirname}/../public/uploads/pictures`);
    },
    filename:(req,file,cb)=>{
        let fileName = `${file.fieldname}-${Date.now()}.${file.originalname.split(".")[1]}`
        cb(null,fileName);
    }
});
const upload = multer({storage:storage});


//ROUTES

//Handle registration request
router.post("/",upload.single("pic"),async(req,res)=>{
    const userData = req.body;
    const fileName = req.file.filename;
    let file = req.file;
    let registrationResponse = await  register(userData,fileName,file);
    if(registrationResponse){
        res.status(200).send("REGISTRATED");
    }else{
        res.status(500).send("REGISTRATION FAILED");
    }
});

router.post("/test",async(req,res)=>{
    sendEmail()
    res.status(200).send("UPLOADED")
});

module.exports = router;