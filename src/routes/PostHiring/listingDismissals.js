const express =  require('express')
const router = express.Router()

//GET
router.get('/dismissals',(req,res,next)=>{
    res.status(200).send({
            "id":0,
            "applicationId":0,
            "date":"2021-05-03",
            "reason":"no_cause_employer_dismissal",
            "isRehired":true,
            "rehiringReason":"hired_intern",
            "createdAt":"2021-05-03T17:46:16.700Z",
            "updatedAt":"2021-05-03T17:46:16.700Z"
    })
})

module.exports = router;