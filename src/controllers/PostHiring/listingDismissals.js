const axios = require('../../auth/applicationAuth')

exports.get = (req,res,next)=>{
    
    axios.get('/dismissals').then(function(data){

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
    //     "applicationId":0,
    //     "date":"2021-05-03",
    //     "reason":"no_cause_employer_dismissal",
    //     "isRehired":true,
    //     "rehiringReason":"hired_intern",
    //     "createdAt":"2021-05-03T17:46:16.700Z",
    //     "updatedAt":"2021-05-03T17:46:16.700Z"
    // }
}