const axios = require('../../auth/applicationAuth')

exports.get = (req,res,next)=>{
    
    axios.get('/departments').then(function(data){

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
    //     "similarTo":"financial_management",
    //     "createdAt":"2021-04-30T13:48:21.293Z",
    //     "updatedAt":"2021-04-30T13:48:21.293Z"
    // }
}