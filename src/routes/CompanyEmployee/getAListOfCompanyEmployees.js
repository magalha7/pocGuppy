const express =  require('express')
const router = express.Router()

//GET
router.get('/company-employees',(req,res,next)=>{
    res.status(200).send({
            "id":0,
            "name":"string",
            "countryOfOrigin":"string",
            "identificationDocument":"string",
            "companyId":0
    })
})

module.exports = router;