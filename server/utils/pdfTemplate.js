const template = ({_id,firstName,lastName,email,image}) => {
    const date = new Date();
    console.log(image)
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>PDF Template</title>
            <style>
                .container{
                    margin: 10px;
                    padding: 10px;
                }
                #picture{
                    width: 150px;
                    height:150px;
                    margin: 10px 0px;
                }
                .userInfo{
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                label{
                    font-weight: 800;
                }
            </style>
        </head>
        <body>

            <div class="container">
                <h1 class="heading">Hall Ticket</h1>
                <img src="${image}" id="picture">
                <div class="userInfo">
                    <div  class="texts">
                        <label>Student ID:</label>
                        <span>${_id}</span>
                    </div>
                    <div class="texts">
                        <label>First Name:</label>
                        <span>${firstName}</span>
                    </div>
                    <div  class="texts">
                        <label>Last Name:</label>
                        <span>${lastName}</span>
                    </div>
                    <div  class="texts">
                        <label>Email:</label>
                        <span>${email}</span>
                    </div>
                    <div  class="texts">
                        <label>Date:</label>
                        <span>${date}</span>
                    </div>
                </div>
            </div>

        </body>
        </html>
    `
};

module.exports = template;