const createId = () => {
    return new Promise((resolve,reject)=>{
        try{
            let firstPhrase = "";
            let secondPhrase = "";
        
            let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let charactersLength = characters.length;
        
            let numbers = "0123456789";
            let numbersLength = numbers.length;
        
            for(let i=0; i<4; i++){
                firstPhrase += characters.charAt(Math.floor(Math.random()*charactersLength))
            };
        
            for(let i=0; i<4; i++){
                secondPhrase += numbers.charAt(Math.floor(Math.random()*numbersLength))
            };
        
            let id = `${firstPhrase}${secondPhrase}`;
        
            resolve(id);
            
        }catch(err){
            console.log(err)
            reject(err);
        };
    });
};

module.exports = createId;