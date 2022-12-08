//////////////////
//IMPORT dependencies
//////////////////
const mongoose = require("./connection")


// //Extract Schema and model 

const { Schema, model } = mongoose

// create new schema for business processes

const businessProcessSchema = new Schema({
                                            name: String,
                                            purpose: String,
                                            capabilityId: String
                                            
                                        })

//create new model for business prcesses     

const BusinessProcess = model("BusinessProcess", businessProcessSchema) 

// Export model
module.exports = BusinessProcess