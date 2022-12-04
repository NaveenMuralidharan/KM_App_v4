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
            valueEnabled: "Capability 1 enables the following value items",
            businessProcesses: []
        },
        {
            capabilityName: "Trial capability 2",
            valueEnabled: "Capability 1 enables the following value items",
            businessProcesses: []
        },
        {
            capabilityName: "Trial capability 3",
            valueEnabled: "Capability 1 enables the following value items",
            businessProcesses: []
        }
    ]

    //delete existing entries in capabilities

    Capability.deleteMany({}, (err, data)=>{
        
        //add seed capabilities
        Capability.create(seedCapabilities, (err, data)=>{
            res.redirect("/")
         })

    })

    

})

// INDEX route
router.get("/", (req, res)=>{

    //fetch all capabilities from db
    Capability.find({}, (err, data)=>{
        res.render("capability/index.ejs", { capabilities: data })
    })

    
})

// NEW route
router.get("/new", (req, res)=>{
    res.render("capability/new.ejs")
})

// CREATE route
router.post("/", (req, res)=>{

    // save req body in db
    Capability.create(req.body, (err, data)=>{
        console.log(data)
        res.redirect("/capabilities")
    })
    
})

// EDIT route
router.get("/:id/edit", (req, res)=>{

    Capability.findById(req.params.id, (err, data)=>{
        // render edit form page
        res.render("capability/edit.ejs", { capability: data })
    })
    
})


// UPDATE route
router.put("/:id", (req, res)=>{

    Capability.findByIdAndUpdate(req.params.id, 
                                req.body, 
                                {new: true}, 
                                (err, data)=>{

                        console.log(data)
                        res.redirect(`/capabilities/${req.params.id}`)
    })

})


// Show route
router.get("/:id", (req, res)=>{

    // find and retrieve data
    Capability.findById(req.params.id, (err, data)=>{
        res.render("capability/show.ejs", { capability: data })
    })

})


// EXPORT controller
module.exports = router