const http = require('http')
const fs = require("fs")

const server = http.createServer((req,res) => {
    
const log = `${Date.now()}:new request recived\n`;
fs.appendFile("log.txt",log,(err,data)=>{  

    res.end("hello from me");
})
});

server.listen(8000, () =>{
    console.log("it is running")
});