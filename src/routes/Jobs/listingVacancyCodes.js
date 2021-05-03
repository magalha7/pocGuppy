const express =  require('express')
const router = express.Router()

//GET
router.get('/:jobId/vacancies',(req,res,next)=>{
    res.status(200).send({
            "id":0,
            "code":"string",
            "status":"valid",
            "errorMessage":"string",
            "createdAt":"2021-05-03T17:21:05.643Z",
            "updatedAt":"2021-05-03T17:21:05.643Z"
    })
})

module.exports = router;