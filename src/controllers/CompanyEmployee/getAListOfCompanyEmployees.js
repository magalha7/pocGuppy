const axios = require('../../auth/applicationAuth')

exports.get = (req,res,next)=>{
    
    axios.get('/company-employees').then(function(data){

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
    //     "countryOfOrigin":"string",
    //     "identificationDocument":"string",
    //     "companyId":0
    // }
}