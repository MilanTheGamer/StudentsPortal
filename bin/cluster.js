const cluster = require("cluster");
const { cpus } = require("os");
const http = require("http");
const app = require("../server/app");
const server = http.createServer(app);
const { port } = require("../server/config/config");

const numCPUs = cpus().length;

if(cluster.isMaster){

    console.log(`Primary ${process.pid} is running at port ${port}`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    };
  
    cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
    });

}else{

    server.listen(port,()=>{
        console.log(`Worker ${process.pid} started`)
    });

};
