const express = require('express')
const router = express.Router()

//GET
router.get('/user-access-profiles',(req,res,next)=>{
    res.status(200).send({
            "id":0,
            "name":"string",
            "permissions":[
                "string"
            ],
            "createdAt":"2021-05-03T17:29:47.899Z",
            "updatedAt":"2021-05-03T17:29:47.899Z"
    })
});

module.exports = router