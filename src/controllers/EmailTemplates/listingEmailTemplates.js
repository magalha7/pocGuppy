const axios = require('../../auth/applicationAuth')

exports.get = (req,res,next)=>{

    axios.get('/email-templates').then(function(data){

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
    //     "id":"string",
    //     "name":"string",
    //     "subject":"string",
    //     "body":"string",
    //     "type":"interview_scheduling"
    // }
}