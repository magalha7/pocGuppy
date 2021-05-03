const express = require('express')
const router = express.Router();

//GET
router.get('/:jobId/applications/:applicationId/hiring-information',(req,res,next)=>{
    res.status(200).send({
        "hiringType":"employee_admission",
        "hiringDate":"2021-04-28T17:13:01.407Z",
        "jobVacancyCodeId":0,
        "salary":0,
        "salaryCurrencyType":"R$"
    })
});

module.exports = router;