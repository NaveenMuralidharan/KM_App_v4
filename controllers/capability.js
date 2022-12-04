/////////////////
//IMPORT dependencies
////////////////

const express = require("express")

const Capability = require("../models/capability")

/////////////////
//Create router variable to attach all routes to

const router = express.Router()

// Router middleware


// ROUTES



// SEED route
router.get("/seed", (req, res)=>{

    const seedCapabilities = [
        {
            capabilityName: "Trial capability 1",
            valueEnabled: "Capability 1 enables the following value items"
        },
        {
            capabilityName: "Trial capability 2",
            valueEnabled: "Capability 1 enables the following value items"
        },
        {
            capabilityName: "Trial capability 3",
            valueEnabled: "Capability 1 enables the following value items"
        }
    ]

    //delete existing entries in capabilities

    //add seed capabilities
    Capability.create(seedCapabilities, (err, data)=>{
        console.log(data)
    })

})

// INDEX route
router.get("/", (req, res)=>{

    //fetch all capabilities from db
    Capability.find({}, (err, data)=>{
        res.render("capability/index.ejs", { capabilities: data })
    })

    
})

module.exports = router