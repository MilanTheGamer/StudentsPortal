const express = require("express");
const app = express();
const registration = require("./routes/registration");

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use("/registration",registration);

module.exports = app;