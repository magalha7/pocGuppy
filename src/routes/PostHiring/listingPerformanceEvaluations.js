const express =  require('express')
const router = express.Router()

//GET
router.get('/performance-evaluations',(req,res,next)=>{
    res.status(200).send({
            "id":0,
            "applicationId":0,
            "date":"2021-05-03",
            "value":"high",
            "createdAt":"2021-05-03T17:46:17.040Z",
            "updatedAt":"2021-05-03T17:46:17.040Z"
    })
});

module.exports = router;