const fs = require("fs");


// fs.writeFile("read.txt", "my name is krishna :)",
// (err)=>{
// console.log("completed");
// });

// fs.appendFile('read.txt', "sjdklfjsdlkfjlsfjfh",
// (err)=>{
// console.log("completed");
// })

fs.readFile('read.txt','utf-8',
(err, data)=>{
    console.log(data);
})