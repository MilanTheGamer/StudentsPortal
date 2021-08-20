const nodemailer = require("nodemailer");
const {mailHost,mailId,mailPassword,mailName} = require("../config/config");

const transporter = nodemailer.createTransport({
    host: mailHost, // hostname
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

const sendEmail = ({to,subject,text,html,attachments}) => {
    return new Promise((resolve,reject)=>{

        const options = {
            form:`"${mailName}" <${mailId}>`,
            to: to,
            subject:subject,
            text:text,
            html:html,
            attachments:attachments
        };
    
        transporter.sendMail(options,(err,info)=>{
            if(err){
                console.log(err);
                reject(err)
            };
            console.log(info.response)
            resolve(info.response)
        });

    });
};

module.exports = sendEmail;