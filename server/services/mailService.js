//Import Essential Modules
const sendMail = require("../utils/sendEmail");

const mailService = (userData,fileName) => {
    return new Promise(async(resolve,reject)=>{
        //To fix - chnage pathname with respect to a global path
        let pdfName = fileName.split(".")[0];
        let mailData = {
            to: userData.email,
            subject: "Successfully Registered",
            text: "You have successfully registered in Students Portal and your Hall ticket is attached with this mail",
            attachments:[
                {
                    fileName:"Hallticket.pdf",
                    path:`${__dirname}/../public/uploads/hallTickets/${pdfName}.pdf`
                }
            ]
        };
        console.log(mailData)
        let mailResponse = await sendMail(mailData)
        if(mailResponse) resolve (true)
    });
};

module.exports = mailService;

