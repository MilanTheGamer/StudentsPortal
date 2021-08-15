const express = require("express");
const app = express();
const registration = require("./routes/registration");
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/static', express.static(path.join(__dirname, 'public')))

app.use("/registration",registration);

app.get("/",(req,res)=>{
    res.sendFile("template.html")
})

module.exports = app;