const fs = require('fs');
// fs.readFile('index.js','utf8',(err,data)=>
// {
//     console.log(err,data)})


    fs.writeFile('index.js',"this the data ",()=>{
        console.log("text is written")
    })

console.log("why so serious");