require('dotenv').config()
const express = require("express");
const colors = require("colors");
const morgan =require("morgan") ;
var cors = require('cors')
// const connectDB = require("./config/conn");
const router = require("./routes/userRoutes")
const adminRoutes =require("./routes/adminRoutes")
const doctorRoutes =require("./routes/doctorRoutes")
 
require("./config/conn")

//mongodb connection
// connectDB();

// rest objects
const app = express();

// middleware
app.use(express.json());
app.use(cors())
app.use(morgan("dev"));

// routes
app.use("/api/v1/user", router);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/doctor", doctorRoutes);




app.get("/",(req,res)=>{
    res.send("hello poryt");
})


// Port
const PORT = process.env.PORT || 8000
// lisition port
app.listen(PORT,()=>{
    console.log(`server is running in ${process.env.NODE_MODE} mode on port ${PORT}`.bgCyan.white)
})


