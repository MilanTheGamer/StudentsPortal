const Student = require("../models/studentModel");
const createId = require("../utils/createId");
const createPdf = require("../utils/createPdf");

const checkIdExist = (id) => {
    return new Promise(async (resolve,reject)=>{
        try{
            let student =await Student.findOne({_id:id});
            if(student){
                resolve(true);
            }else{
                resolve(false);
            };
        }catch(err){
            console.log(err);
            reject(err);
        };
    });
};

const createUniqueId = () => {
    return new Promise(async(resolve,reject)=>{
        try{
            let id = await createId();
            let studentExist = await checkIdExist(id);
            if(studentExist){
                await createUniqueId();
            }else{
                resolve(id);
            };
        }catch(err){
            console.log(err);
            reject(err)
        };
    });
};

const registerService = (studentData,fileName,file) => {
    return new Promise(async(resolve,reject)=>{
        try{
            let id = await createUniqueId();
            studentData._id = id;
        
            let newStudent = new Student(studentData);
            newStudent.save();
            
            let pdfStatus = await createPdf(studentData,fileName,file);

            if(pdfStatus){
                resolve(true);  
            }else{
                resolve(false);
            };

        }catch(err){
            console.log(err);
            reject(false)
        };
    });
};

module.exports = registerService;