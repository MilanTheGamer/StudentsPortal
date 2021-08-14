const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/students",{useNewUrlParser: true, useUnifiedTopology: true});

const studentSchema = new mongoose.Schema({
    _id:String,
    firstName:String,
    lastName:String,
    email:String,
});

const Student = mongoose.model("Student",studentSchema);

module.exports = Student;