const axios = require('../../auth/applicationAuth')

exports.get = (req,res,next)=>{

    axios.get('/user-access-profiles').then(function(data){

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
    //     "permissions":[
    //         "string"
    //     ],
    //     "createdAt":"2021-05-03T17:29:47.899Z",
    //     "updatedAt":"2021-05-03T17:29:47.899Z"
    // }
}