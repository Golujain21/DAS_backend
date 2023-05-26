// const mongoose = require("mongoose");
const colors = require("colors");
// const DB =process.env.DATABASE
const mongoose = require("mongoose")
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/DoctorApp",{
 useNewUrlParser:true,
 useUnifiedTopology:true
}).then(()=>{
  //  console.log("connection successfull");
    console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);

}).catch((e)=>{
    console.log(`No Connection ${e}`);
    console.log(`Mongodb Server Issue ${error}`.bgRed.white);

})

// const connectDB = async () => {
//   try {
//     // mongoose.set('strictQuery', false);
//     await mongoose.connect("mongodb://127.0.0.1:27017/DoctorApp",{ useNewUrlParser: true });
//     console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);
//   } catch (error) {
//     console.log(`Mongodb Server Issue ${error}`.bgRed.white);
//   }
// };

// module.exports = connectDB;
// mongodb://127.0.0.1:27017/DoctorApp?
// const mongoose = require("mongoose");
// const DB=process.env.DATABASE
// mongoose.connect(DB).then(()=>console.log("data base connection successfully")).catch((error)=>console.log(`connection:${error.message}`))  
