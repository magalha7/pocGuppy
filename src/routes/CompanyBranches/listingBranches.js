const express =  require('express')
const router = express.Router()

//GET
router.get('/branches',(req,res,next)=>{
    res.status(200).send({
            "id":0,
            "code":"string",
            "name":"string",
            "path":[
                "string"
            ],
            "addressCountry":"string",
            "addressCountryShortName":"string",
            "addressState":"string",
            "addressStateShortName":"string",
            "addressCity":"string",
            "addressStreet":"string",
            "addressNumber":"string",
            "addressZipCode":"string",
            "addressLatitude":0,
            "addressLongitude":0,
            "createdAt":"2021-05-03T17:40:44.545Z",
            "updatedAt":"2021-05-03T17:40:44.545Z"
    })
})

module.exports = router;