const axios = require('../../auth/applicationAuth')

exports.get = (req,res,next)=>{
    
    const jobId = req.params.jobId;

    axios.get('/jobs/'+jobId+'/steps').then(function(data){

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
    //     "description":"string",
    //     "type":"registration",
    //     "order":0,
    //     "endDate":"2021-05-03",
    //     "onlineType":"customAssessment",
    //     "createdAt":"2021-05-03T16:57:44.541Z",
    //     "updatedAt":"2021-05-03T16:57:44.541Z"
    // }
}