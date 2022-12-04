/////////////////////
//IMPORT DEPENDENCIES
/////////////////////
require("dotenv").config()
const mongoose = require("mongoose")

//////////////////////////////////
///Establish database connection
/////////////////////////////////

const DATABASE_URL = process.env.DATABASE_URL

const CONFIG = {
            useNewUrlParser: true,
            UseUnifiedTopology: true
        }

// Establish connection
mongoose.connect(DATABASE_URL, CONFIG)

// Event listeners for when db connection is open, closed, error
mongoose.connection
                    .on("open", ()=> console.log("Connected to mongoose"))
                    .on("closed", ()=> console.log("Disconnected from mongoose"))
                    .on("error", (error)=> console.log(error))

///////////////////////////////
//EXPORT CONNECTION MODULE
////////////////////////////// 

module.exports = mongoose