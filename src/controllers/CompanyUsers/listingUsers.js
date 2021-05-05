const axios = require('../../auth/applicationAuth')

exports.get = (req,res,next)=>{

    axios.get('/users').then(function(data){

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
    //     "email":"string",
    //     "departmentId":0,
    //     "roleId":0,
    //     "profileTestEnabled":true,
    //     "type":"root",
    //     "code":"string",
    //     "taxpayerRegistry":"string",
    //     "countryOfOrigin":"string",
    //     "accessProfileId":0,
    //     "createdAt":"2021-05-03T17:29:48.262Z",
    //     "updatedAt":"2021-05-03T17:29:48.262Z"
    // }
}