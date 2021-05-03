const express = require('express')
const router = express.Router()

//GET
router.get('/users',(req,res,next)=>{
    res.status(200).send({
            "id":0,
            "name":"string",
            "email":"string",
            "departmentId":0,
            "roleId":0,
            "profileTestEnabled":true,
            "type":"root",
            "code":"string",
            "taxpayerRegistry":"string",
            "countryOfOrigin":"string",
            "accessProfileId":0,
            "createdAt":"2021-05-03T17:29:48.262Z",
            "updatedAt":"2021-05-03T17:29:48.262Z"
    })
})

module.exports = router