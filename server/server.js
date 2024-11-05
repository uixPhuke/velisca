const express = require("express");
const app = express();
const connectDB=require('./db')
require("dotenv").config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "This is Velisca Server" });
});

//connect to database
connectDB()


app.listen(PORT,()=>{
    console.log(`server is runing at PORT ${PORT}`)
})

