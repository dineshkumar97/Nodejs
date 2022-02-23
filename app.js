const express =require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
mongoose.connect(process.env.data_name,
{  
   useNewUrlParser: true,  
   useUnifiedTopology: true,  
});




var fetchRouter = require('./routes/routing');
app.use("/api/test",fetchRouter)
app.listen(4007,()=>console.log(`DB Name ${process.env.data_name}` ))


// mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb



