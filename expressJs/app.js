const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.send("hello krishna how's doing")
});

app.get("/about", (req, res)=>{
    res.send("hello i am about page")
})

app.listen(8000, ()=>console.log("hello world"))