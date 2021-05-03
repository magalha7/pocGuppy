const express = require('express')
const router = express.Router()

//GET
router.get('/career-pages',(req,res,next)=>{
    res.status(200).send({
        "id":0,
        "subdomain":"string",
        "name":"string",
        "jobBoardsName":"string",
        "companySection":{
            "title":"string",
            "description":"string"
        },
        "jobsSection":{
            "title":"string",
            "description":"string"
        },
        "socialMediaSection":{
            "title":"string",
            "websiteUrl":"string",
            "facebookUrl":"string",
            "instagramUrl":"string",
            "linkedinUrl":"string",
            "lovemondaysUrl":"string"
        },
        "videosSection":{
            "title":"string",
            "description":"string",
            "videos":["string"]
        },
        "candidateTestimonialsSection":{
            "title":"string",
            "description":"string"
        },
        "employeeTestimonialsSection":{
            "title":"string",
            "description":"string"
        },
        "createdAt":"2021-04-28T19:43:23.114Z",
        "updatedAt":"2021-04-28T19:43:23.114Z"
    })
})

module.exports = router;