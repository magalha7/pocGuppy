const axios = require('../../auth/applicationAuth')

exports.get = (req,res,next)=>{
    
    axios.get('/job-custom-fields').then(function(data){

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
    //     "label":"string",
    //     "type":"select",
    //     "order":0,
    //     "required":true,
    //     "enum":[
    //         "string"
    //     ]
    // }
}