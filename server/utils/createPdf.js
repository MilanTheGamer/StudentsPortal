const pdf = require("html-pdf");
const pdfTemplate = require("./pdfTemplate");
const {hostName} = require("../config/config"); 

const createPdf = (ticketData,fileName) => {
    return new Promise((resolve,reject)=>{
        try{
            ticketData.image = `${hostName}/static/uploads/pictures/${fileName}`;

            let outputName = fileName.split(".")[0];
            pdf.create(pdfTemplate(ticketData),{}).toFile(`${__dirname}/../public/uploads/hallTickets/${outputName}.pdf`,(err,res)=>{
                //Resolve false if an error occurs while creating pdf
                if (err) return resolve(false);
                //Resolve true if pdf is created
                if(res) resolve (true)
            });
        }catch(err){
            console.log(err);
            reject(err)
        };
    });
};

module.exports = createPdf;