// Import dependencies
const express = require("express")
const BusinessProcess = require("../models/business_process")
const Capability = require("../models/capability")

// ROUTER variable to which all routes will be attached to

const router = express.Router()

//////////////////////////
////ROUTES//////////////
////////////////////////

// New route
router.get("/:capabilityId/new", (req, res)=>{
    res.render("business_process/new.ejs", { capabilityId: req.params.capabilityId })
})

// CREATE route
router.post("/:capabilityId", (req, res)=>{

    // console.log("req params id is "+ req.params.id)
    // console.log("req body is "+ req.body.capabilities)

    // create an empty capabilities array to store
    // which capability business process belongs to, push 
    req.body.capabilities = []
    req.body.capabilities.push(req.params.capabilityId)


    BusinessProcess.create(req.body, (err, data)=>{
        console.log("Business process created "+ data)

        // update capability to link business process to it

        let businessProcess = { businessProcessId: data._id, 
                                businessProcessName: data.name } 

       Capability.updateOne({_id: req.params.capabilityId},
                            {$push: { businessProcesses: businessProcess }},
                            (err, data)=>{
                                console.log("updated capability with bp "+data)
                                res.redirect(`/capabilities/${req.params.capabilityId}`)
                            }
            )

        
    })
})

// show route
router.get("/:capabilityId/:businessProcessId", (req, res)=>{

    console.log( "req params is "+req.params.capabilityId + " and "+ req.params.businessProcessId )

    BusinessProcess.findById(req.params.businessProcessId, (err, data)=>{

        console.log("found bp "+data)
 

        res.render("business_process/show.ejs", { businessProcess : data, capabilityId: req.params.capabilityId })


    })

    
})


// Export router
module.exports = router