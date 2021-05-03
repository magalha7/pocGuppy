const express = require('express')
const router = express.Router()

//GET
router.get('/departments',(req,res,next)=>{
    res.status(200).send({
            "id":0,
            "name":"string",
            "code":"string",
            "similarTo":"financial_management",
            "createdAt":"2021-04-30T13:48:21.293Z",
            "updatedAt":"2021-04-30T13:48:21.293Z"
    })
})

module.exports = router