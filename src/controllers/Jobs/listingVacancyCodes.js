const axios = require('../../auth/applicationAuth')

exports.get = (req,res,next)=>{
    
    const jobId = req.params.jobId;

    axios.get('/jobs/'+jobId+'/vacancies').then(function(data){

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
    //     "id":0,
    //     "code":"string",
    //     "status":"valid",
    //     "errorMessage":"string",
    //     "createdAt":"2021-05-03T17:21:05.643Z",
    //     "updatedAt":"2021-05-03T17:21:05.643Z"
    // }
}