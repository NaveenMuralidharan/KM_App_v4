///////////////
//IMPORT dependencies
///////////////

require("dotenv").config()//Load env variables
const express = require("express")
const methodOverride = require("method-override")
const morgan = require("morgan")
const CapabilityRouter = require("./controllers/capability")
// const mongoose = require("mongoose")

// //////////////////////////////////
// ///Establish database connection
// /////////////////////////////////
// const DATABASE_URL = process.env.DATABASE_URL
// const CONFIG = {
//             useNewUrlParser: true,
//             UseUnifiedTopology: true
//         }

// // Establish connection
// mongoose.connect(DATABASE_URL, CONFIG)

// // Event listeners for when db connection is open, closed, error
// mongoose.connection
//                     .on("open", ()=> console.log("Connected to mongoose"))
//                     .on("closed", ()=> console.log("Disconnected from mongoose"))
//                     .on("error", (error)=> console.log(error))

////////////////////////////////////
//Our Models
////////////////////////////////////
////pull model and Schem from mongoose
// const { model, Schema } = mongoose

// // create a business prcoess schema
// const capabilitySchema = {
//                                name: String,
//                                description: String
                               


//                             }
            
// // make capability model
// const Capability = mongoose.model('Capability', capabilitySchema)

// // ////////////////
//Create express application Object
///////////////////
const app = express()


///////////////////////
////Middleware
//////////////////////
app.use(morgan("tiny"))//logger
app.use(methodOverride("_method"))//override for put and delete reqs from forms
app.use(express.urlencoded({extended:true}))//parse url encoded req bodies
app.use(express.static("public"))//serve files from public folder, statically
app.use("/capabilities", CapabilityRouter)

//////////////////
/////Routes
/////////////////

app.get("/", (req, res)=>{
    res.send("Your app is running")
})













// ///////////////
//Listen to running app
/////////////////
app.listen(process.env.PORT, ()=>{
    console.log("App is running on PORT "+process.env.port)
}) 