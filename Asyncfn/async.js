const fs = require('fs');

// const data = fs.readFileSync('read.txt','utf-8');
// console.log(data);

// fs.mkdir("krish", (err)=>{
//     console.log("folder created");
// });

// fs.writeFile("./krish/bio.txt", "my name is krishna", (err)=>{
//     console.log("file created");
// });

// fs.appendFile("./krish/bio.txt", "hello how are you", (err)=>{
//     console.log("data appended.");
// });

fs.readFile("./krish/bio.txt", "utf-8", (err, data)=>{
    console.log(data);
});
// fs.unlink("./krish/bio.txt", (err)=>{
//     console.log("file deleted");
// });