console.log("Hello world")

// Viewing info
//  Announcement type of Step - shown to all public


// const webPage = {
//                         meta: {
//                             capabilityId: ,
//                             processId: ,
//                            pageOwnerId: ,        
//                             stepOrder: ,
//                             stepName: ,
//                                 role: ,
//                             }

//                         viewContent: {
//                                                title: , 
//                                              content: ,
//                                           navSection: ,
//                                        navSubSection: ,
//                                        button:[{name: , link: }] 
//                                     }
// }



// TRAIALWEBPAGE collection saves data on all webpages created and are in trial. A route, /public/trial, 
// accessible only to admin, GETS data from TRIALWEBPAGE collection and shows webpage view index.ejs
// which has a collapsing list of all webpages.

// Oncce web page trial is good, user can hit save changes which will save data to WEBPAGE collection, that feeds 
// /public/home page. If save draft is hot, leave in trial webpage data, if cancel change is hit, remove it from 
// TRAIALWEBPAGE collection


//  FORM = {   
//             meta: {
//                 capabilityId: ,
//                 processId: ,
//                 stepOrder: ,
//                 stepName: ,
//                     role: ,
//                     _id: ,
//                 },
//             resubmit: Boolean,
//             submitNotificaion: Boolean,
//             formData: {}
// }



// TRIALFORMS collection saves data on all public forms created and are in trial. A route, /public/forms/trial, accessible only 
// to admin, GETs all forms index page. It will save POST request data from forms to TRIALTASKS collecion. 
// The /private/tasks/trial route lists all tasks in trial

// FORMS collection saves data on all saved forms. A route, /public/forms, accessible only to admin, GETs all forms on index page.
// /capabilities/tasks lists all tasks belonging to the capability.

//TASK STATUS AND ACTIONS - each status associated to actions like "submitted-send templated email, need info - send modifiable templated
//email, completed- send portal access, modifiable templated email.

//METRICS - time to completion. 

//DATA - Once completed, task along with status history and outcome etc, stored in /capabilityID/processID/tasks/completed

