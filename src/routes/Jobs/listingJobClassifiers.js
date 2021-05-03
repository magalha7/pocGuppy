const express =  require('express')
const router = express.Router()

//GET
router.get('/:jobId/classifiers',(req,res,next)=>{
    res.status(200).send({
            "id":0,
            "type":"approver",
            "user":{
                "id":0,
                "name":"string"
            }
    })   
})

module.exports = router;