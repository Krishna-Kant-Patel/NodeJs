const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/krishna",{useNewUrlParser: true})
.then(()=> console.log("connection successful..."))
.catch((error)=>console.log(error));