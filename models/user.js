// Import dependencies
////////////////////////////////
const mongoose = require("./connection")

//////////////////
//Define userSchema
//////////////////
// pull Schema and model from mongoose
const { Schema, model } = mongoose

//make user schema
const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    roleLevel: String
})

//make user model
const User = model("User", userSchema)

//export user model
module.exports = User