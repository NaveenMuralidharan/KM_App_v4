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
router.get("/:capabilityName/:capabilityId/new", (req, res)=>{
    res.render("business_process/new.ejs", { capabilityId: req.params.capabilityId, capabilityName: req.params.capabilityName })
})


// EDIT route
router.get("/:capabilityId/:businessProcessId/edit", (req, res)=>{
    
    BusinessProcess.findById(req.params.businessProcessId, (err, data)=>{
        res.render("business_process/edit.ejs", { businessProcess : data, capabilityId: req.params.capabilityId })
    })

})

// UPDATE route
router.put("/:capabilityId/:businessProcessId", (req, res)=>{

    BusinessProcess.findByIdAndUpdate(
                                        req.params.businessProcessId,
                                        req.body,
                                        { new: true },
                                        (err, data)=>{
                                                        res.redirect(`/businessprocesses/${req.params.capabilityId}/${req.params.businessProcessId}`)

                                        })
})



// CREATE route
router.post("/:capabilityId", (req, res)=>{

    // console.log("req params id is "+ req.params.id)
    // console.log("req body is "+ req.body.capabilities)

    // create an empty capabilities array to store
    // which capability business process belongs to, push 
    
    req.body.capabilityId = req.params.capabilityId
    req.body.processOwnerId = req.session.userId

    BusinessProcess.create(req.body, (err, data)=>{
        
        // update capability to link business process to it

    //     let businessProcess = { businessProcessId: data._id, 
    //                             businessProcessName: data.name } 

    //    Capability.updateOne({_id: req.params.capabilityId},
    //                         {$push: { businessProcesses: businessProcess }},
    //                         (err, data)=>{
    //                             console.log("updated capability with bp "+data)
    //                             res.redirect(`/capabilities/${req.params.capabilityId}`)
    //                         }
    //         )
        res.redirect(`/capabilities/${req.params.capabilityId}`)
        
    })
})



// INDEX route
router.get("/:capabilityName/:capabilityId/index", (req, res)=>{
    BusinessProcess.find({ capabilityId: req.params.capabilityId }, (err, data)=>{
        res.render("business_process/index.ejs", { processes: data, capabilityName: req.params.capabilityName, capabilityId: req.params.capabilityId })
    })
})



// show route
router.get("/:capabilityId/:businessProcessId", (req, res)=>{

    console.log( "req params is "+req.params.capabilityId + " and "+ req.params.businessProcessId )

    BusinessProcess.findById(req.params.businessProcessId, (err, data)=>{

        console.log("found bp "+data)
        
        console.log(req.session.userId)
        console.log(data.processOwnerId)
        // if session userID is same as process owner id,
        if(req.session.userId === data.processOwnerId){
            console.log("its PO! can show options")
            res.render("business_process/show.ejs", { businessProcess : data, capabilityId: req.params.capabilityId, showOptions: true })
        } else {
            res.render("business_process/show.ejs", { businessProcess : data, capabilityId: req.params.capabilityId, showOptions: false })
        }

        


    })

    
})

// // DELETE route
router.delete("/:capabilityTd/:businessProcessId", (req, res)=>{

    BusinessProcess.findByIdAndDelete(req.params.businessProcessId, (err, data)=>{
        res.redirect(`/capabilities/${req.params.capabilityTd}`)
    })
})





// Export router
module.exports = router;