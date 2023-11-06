const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.send("hello krishna how's doing");
});

app.get("/about", (req, res)=>{
    res.send("hello i am about page");
});

app.get("/contact", (req, res)=>{
    res.send("welcome to contact page");
})

app.listen(8000, ()=>console.log("server started at 8000"))