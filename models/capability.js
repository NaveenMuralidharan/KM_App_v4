//////////
//Import dependencies
///////////

const mongoose = require("./connection")

// extract Schema and model
const { Schema, model } = mongoose

// create new capability schema
const capabilitySchema = new Schema({
                                        capabilityName: String,
                                        valueEnabled: String,
                                        businessProcesses: [ { businessProcessId: String, 
                                            businessProcessName: String}]
})

// create capability model
const Capability = model("Capability", capabilitySchema)

// Export model
module.exports = Capability