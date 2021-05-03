const express =  require('express')
const router = express.Router()

//GET
router.get('/email-templates',(req,res,next)=>{
    res.status(200).send({
            "id":"string",
            "name":"string",
            "subject":"string",
            "body":"string",
            "type":"interview_scheduling"
    })
})

module.exports = router;