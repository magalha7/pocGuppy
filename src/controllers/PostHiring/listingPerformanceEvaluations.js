const axios = require('../../auth/applicationAuth')

exports.get = (req,res,next)=>{
    
    axios.get('/performance-evaluations').then(function(data){

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
    //     "value":"high",
    //     "createdAt":"2021-05-03T17:46:17.040Z",
    //     "updatedAt":"2021-05-03T17:46:17.040Z"
    // }
}