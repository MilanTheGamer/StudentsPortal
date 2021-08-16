const config = {
    nodeEnvironment:process.env.NODE_ENV,
    port:process.env.PORT,
    hostName:process.env.HOST_NAME,
    mailId:process.env.MAIL_ID,
    mailPassword:process.env.MAIL_PASSWORD
};

module.exports = config;