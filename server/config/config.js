const config = {
    nodeEnvironment:process.env.NODE_ENV,
    port:process.env.PORT,
    hostName:process.env.HOST_NAME,
    mailHost:process.env.MAIL_HOST,
    mailId:process.env.MAIL_ID,
    mailPassword:process.env.MAIL_PASSWORD,
    mailName:process.env.MAIL_NAME
};

module.exports = config;