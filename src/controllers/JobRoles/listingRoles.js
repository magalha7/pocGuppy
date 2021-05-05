const axios = require('../../auth/applicationAuth')

exports.get = (req,res,next)=>{
    
    axios.get('/roles').then(function(data){

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
    //     "code":"string",
    //     "similarTo":"analyst",
    //     "createdAt":"2021-05-03T17:25:04.891Z",
    //     "updatedAt":"2021-05-03T17:25:04.891Z"
    // }
}