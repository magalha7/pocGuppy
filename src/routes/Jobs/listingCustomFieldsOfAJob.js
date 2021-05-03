const express =  require('express')
const router = express.Router()

//GET
router.get('/:jobId/custom-fields',(req,res,next)=>{
    res.status(200).send({
            "id":"string",
            "label":"string",
            "value":"string",
            "type":"select",
            "order":0,
            "required":true,
            "enum":[
                "string"
            ]
    })
});

module.exports = router;