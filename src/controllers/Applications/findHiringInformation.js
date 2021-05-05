const axios = require('../../auth/applicationAuth')

exports.get = (req,res,next)=>{

    const jobId = req.params.jobId;
    const applicationId = req.params.applicationId;

    axios.get('/jobs/'+jobId+'/applications/'+applicationId+'/hiring-information').then(function(data){

        if(data){
            res.status(200).send(data)
            console.log(data)
        }
            
    }).catch(function(error){
        if(error){
            res.status(401).send(error)
            console.log(error)
        }
    })

    // {
    //     "hiringType":"employee_admission",
    //     "hiringDate":"2021-04-28T17:13:01.407Z",
    //     "jobVacancyCodeId":0,
    //     "salary":0,
    //     "salaryCurrencyType":"R$"
    // }
}