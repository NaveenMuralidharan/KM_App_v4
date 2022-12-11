/////////////////////////
//Import dependencies
////////////////////////
const express = require("express")
const User = require("../models/user")
const bcrypt = require("bcryptjs")

////////////////
//create router
//////////////////
const router = express.Router()

////////////////////////////////////
//routes
////////////////////////////////

// The signup route (Get form, post submit form)
router.get("/signup", (req, res)=>{
    res.render("users/signup.ejs")
})

//Login route
router.get("/login", (req, res)=>{
    res.render("users/login.ejs")
})

module.exports = router