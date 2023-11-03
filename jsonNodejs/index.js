const fs = require("fs")

const bioDate ={
    name: "krishna",
    age : 23,
    city: "varanasi"
};

const jsonData = JSON.stringify(bioDate);
// fs.writeFile("json1.json",jsonData, (err)=>{
//     console.log("done");
// });
fs.readFile("json1.json","utf-8", (err, data)=>{
    console.log(data);
    const orgData = JSON.parse(data)
    console.log(orgData);
})
// console.log(jsonData);

// const obj = JSON.parse(jsonData);
// console.log(obj.name);