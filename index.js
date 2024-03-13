const express=require("express")
const coursesRouter=require("./routes/courses")
const bodyParser= require('body-parser')
require("dotenv").config()

const mongoose = require('mongoose');

const app=express();

app.use(bodyParser.json())

app.use("/api/courses",coursesRouter)


mongoose.connect(process.env.DB_CONNECTION_URL)

const conn=mongoose.connection

conn.on('open',() =>{
    console.log("connection Stablished.. ");
})
   


app.listen(process.env.PORT,() =>{
    console.log("server is running..");
});