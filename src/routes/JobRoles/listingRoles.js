const express =  require('express')
const router = express.Router()

router.get('/',(req,res,next)=>{
    res.status(200).send({
            "id":0,
            "name":"string",
            "code":"string",
            "similarTo":"analyst",
            "createdAt":"2021-05-03T17:25:04.891Z",
            "updatedAt":"2021-05-03T17:25:04.891Z"
    })
})

module.exports = router;