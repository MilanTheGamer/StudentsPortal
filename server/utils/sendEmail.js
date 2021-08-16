const nodemailer = require("nodemailer");
const {mailId,mailPassword} = require("../config/config");

const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
        user: mailId,
        pass: mailPassword
    }
});


const options = {
    form:'"Typical Engineer " <typicalengineer@outlook.com>',
    to:"alansalim@msn.com",
    subject:"Testing email",
    text:"TEST MAIL"
}

const sendEmail = (toAddress,matter,file) => {
    transporter.sendMail(options,(err,info)=>{
        if(err){
            console.log(err);
            return
        };
        console.log(info.response)
    })
};

module.exports = sendEmail;