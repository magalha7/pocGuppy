const axios = require('../../auth/applicationAuth')

exports.get = (req,res,next)=>{
    
    const jobId = req.params.jobId;
    const applicationId = req.params.applicationId;

    axios.get('/jobs/'+jobId+'/applications/'+applicationId+'/rating-criteria').then(function(data){
        
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
    //     "name":"string",
    //     "ratings":[{
    //         "id":0,
    //         "ratingCriteriaId":0,
    //         "applicationId":0,
    //         "candidateId":0,
    //         "jobId":0,
    //         "userId":0,
    //         "rating":0,
    //         "createdAt":"2021-04-28T17:13:01.499Z",
    //         "updatedAt":"2021-04-28T17:13:01.499Z"
    //     }]
    // }
}