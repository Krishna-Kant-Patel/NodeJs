const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

const staticPath = path.join(__dirname,'../public');
app.set('view engine', "hbs");

// app.use(express.static(staticPath));
app.get("/", (req, res)=>{
    res.render('index',{greeting:"how are you?"})
})

app.get("/", (req, res)=>{
    res.send("hello from server");
})

app.listen(port, ()=>{
    console.log(`listening port number ${port}`);
})