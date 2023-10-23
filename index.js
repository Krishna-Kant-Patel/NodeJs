const fs = require("fs");
// fs.writeFileSync('read.txt','hello Krishna how are you');
// fs.appendFileSync('read.txt',"I am fine just code as much as you can");


// const buf_data = fs.readFileSync("read.txt");
// data = buf_data.toString();
// console.log(data);

fs.renameSync("read.txt", "readWrite.txt");
