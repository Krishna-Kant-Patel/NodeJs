const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/demo",{useNewUrlParser: true})
.then(()=> console.log("connection successful..."))
.catch((error)=>console.log(error));


const krishna = new mongoose.Schema({
    name: String,
    tech: String,
    age: Number,
    active : Boolean
})

const Krish = new mongoose.model("demodata", krishna);