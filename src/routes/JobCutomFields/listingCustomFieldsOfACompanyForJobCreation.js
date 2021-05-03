const express = require('express')
const router =  express.Router()

//GET
router.get('/job-custom-fields',(req,res,next)=>{
    res.status(200).send({
            "id":"string",
            "label":"string",
            "type":"select",
            "order":0,
            "required":true,
            "enum":[
                "string"
            ]
    })
});

module.exports = router;