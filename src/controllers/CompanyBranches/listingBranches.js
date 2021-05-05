const axios = require('../../auth/applicationAuth')

exports.get = (req,res,next)=>{

    axios.get('/branches').then(function(data){
        
        if(data){
            res.status(200).send(data)
            console.log(data)
        }    

    }).catch(function(error){

        if(error){
            res.status(401).send(error)
            console.log(data)
        }
    })
    
    // {
    //     "id":0,
    //     "code":"string",
    //     "name":"string",
    //     "path":[
    //         "string"
    //     ],
    //     "addressCountry":"string",
    //     "addressCountryShortName":"string",
    //     "addressState":"string",
    //     "addressStateShortName":"string",
    //     "addressCity":"string",
    //     "addressStreet":"string",
    //     "addressNumber":"string",
    //     "addressZipCode":"string",
    //     "addressLatitude":0,
    //     "addressLongitude":0,
    //     "createdAt":"2021-05-03T17:40:44.545Z",
    //     "updatedAt":"2021-05-03T17:40:44.545Z"
    // }
}