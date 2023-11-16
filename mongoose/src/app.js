const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/demo", { useNewUrlParser: true })
    .then(() => console.log("connection successful..."))
    .catch((error) => console.log(error));


const krishna = new mongoose.Schema({
    name: String,
    tech: String,
    age: Number,
    active: Boolean
})

const Krish = new mongoose.model("demodata", krishna);


// const reactData = new Krish({
//     name: "Krishna",
//     tech: "Reactjs",
//     age: 23,
//     active : true
// })

// reactData.save();

const createDoc = async () => {
    try {
        const reactData = new Krish({
            name: "Nodejs",
            tech: "BackEnd",
            active: true
        })
        const javascriptData = new Krish({
            name: "JavaScript",
            tech: "Frontend",
            active: true
        })
        const mongoDbData = new Krish({
            name: "MongoDb",
            tech: "Data-base",
            active: true
        })

     const result =  await Krish.insertMany([javascriptData, mongoDbData]);
     console.log(result);

    } catch (error) {
        console.log(error);

    }
}
// createDoc();


const getData =async ()=>{
    const results  = await Krish.find();
    console.log(results);
}
getData()