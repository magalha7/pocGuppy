const express = require('express');
const router = express.Router();

//GET
router.get('/:jobId/applications/:applicationId/tags',(req,res,next)=>{
    res.status(200).send({
            "id":0,
            "name":"string",
            "jobId":0,
            "applicationId":0,
            "createdAt":"2021-04-28T17:13:01.234Z",
            "updatedAt":"2021-04-28T17:13:01.234Z"
    })
});

module.exports = router;