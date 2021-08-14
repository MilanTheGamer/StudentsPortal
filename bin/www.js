const app = require("../server/app");
const http = require("http");
const { port } = require("../server/config/config");
const server = http.createServer(app);

server.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
});