const express = require("express");
const app = express();
const cors = require("cors");
require('./db/conn');
const LoginData = require('./models/login');
const Post = require('./models/posts');


const port  = process.env.PORT || 8000;


app.use(express.json({limit: '25mb'}));
app.use(cors());

app.get("/", async (req, res) => {
    try {
        // Fetch data from MongoDB
        const data = await LoginData.find();
        
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.post("/login", (req, res)=>{
    console.log(req.body);
    const user = new LoginData(req.body);
    user.save().then(()=>{
        res.send(user);
    }).catch((e)=>{
        res.send(e);
    })
    // res.send("response from other side");
});

app.get("/image", async (req, res) => {
    try {
        // Fetch data from MongoDB
        const data = await Post.find();
        
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
app.use("/uploads", async (req, res) => {
    const body = req.body;
    try {
      const newImage = await Post.create(body);
      newImage.save();
      res.status(201).json({message: "new image uploaded", createdPost: newImage});
    } catch (error) {
      res.status(409).json({
        message: error.message,
      });
    }
  });

app.listen(port, ()=>{
    console.log(`connection set up at ${port}`);
})