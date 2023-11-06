const express = require("express");

const app = express();
const port = 3000;
app.get("/", (req, res)=>{
    res.send("<h1>welcome to my home page</h1>");
});
app.get("/about", (req, res)=>{
    res.send("welcome to my about page");
});
app.get("/contact", (req, res)=>{
    res.json([{
        id:1,
        name:"krishna"
    },
{
    id: 2,
    name: "neeraj"
}]);
});

app.listen(port, ()=>{
    console.log(`listening to port number ${port}`);
})