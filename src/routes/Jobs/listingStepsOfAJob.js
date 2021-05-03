const express =  require('express')
const router = express.Router()

//GET
router.get('/:jobId/steps',(req,res,next)=>{
    res.status(200).send({
            "id":0,
            "name":"string",
            "description":"string",
            "type":"registration",
            "order":0,
            "endDate":"2021-05-03",
            "onlineType":"customAssessment",
            "createdAt":"2021-05-03T16:57:44.541Z",
            "updatedAt":"2021-05-03T16:57:44.541Z"
    })
});

module.exports = router;