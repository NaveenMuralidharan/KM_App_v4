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

// Signup post page - CREATE new user
router.post("/signup", async (req, res)=>{

    //encrypt password
    req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))

    //create new user
    User.create(req.body, (err, data)=>{
        // redirect to login page
        res.redirect("/users/login")
    })

})


//Login GET route
router.get("/login", (req, res)=>{
    res.render("users/login.ejs")
})

//Login POST route
router.post("/login", (req, res)=>{

    // extract out username and pwd
    const { username, password } = req.body

    // check if username exists
    User.findOne({ username }, (err, user)=>{

        //if user is falsy, alert user doesnt exist
        if(!user) {
            res.send("User doesn't exist!")
        } else {
            //else compare pwds
            const result = bcrypt.compareSync(password, user.password)
            //if pwd matches, redirec to /capabilities
            if(result){
                res.redirect("/capabilities")
            } else {
                res.send("wrong password")
            }
        }

    })


})



module.exports = router