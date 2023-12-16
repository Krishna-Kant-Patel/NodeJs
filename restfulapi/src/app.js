const express = require("express");
const app = express();
const cors = require("cors");
require('./db/conn');
const LoginData = require('./models/login')
const port  = process.env.PORT || 8000;

app.get("/", async (req, res) => {
    try {
        // Fetch data from MongoDB
        const data = await LoginData.find();
        
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.use(express.json());
app.use(cors());

app.post("/login", (req, res)=>{
    console.log(req.body);
    const user = new LoginData(req.body);
    user.save().then(()=>{
        res.send(user);
    }).catch((e)=>{
        res.send(e);
    })
    // res.send("response from other side");
})

app.listen(port, ()=>{
    console.log(`connection set up at ${port}`);
})