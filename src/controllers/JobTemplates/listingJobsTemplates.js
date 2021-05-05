const axios = require('../../auth/applicationAuth')

exports.get = (req,res,next)=>{
    
    axios.get('/job-templates').then(function(data){

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
    //     "id":100,
    //     "name":"string",
    //     "type":"vacancy_type_apprentice",
    //     "departmentId":0,
    //     "departmentName":"string",
    //     "roleId":0,
    //     "roleName":"string",
    //     "branchId":0,
    //     "branchName":"string",
    //     "description":"string",
    //     "responsibilities":"string",
    //     "prerequisites":"string",
    //     "additionalInformation":"string",
    //     "notes":"string",
    //     "disabilities":true,
    //     "addressStreet":"string",
    //     "addressNumber":"string",
    //     "addressCity":"string",
    //     "addressState":"string",
    //     "addressStateShortName":"string",
    //     "addressCountry":"string",
    //     "addressCountryShortName":"string",
    //     "addressZipCode":"string",
    //     "addressLatitude":0,
    //     "addressLongitude":0,
    //     "remoteWorking":true,
    //     "reason":"staff_increase",
    //     "image":"string",
    //     "socialMediaImage":"string",
    //     "careerPageId":0,
    //     "careerPageName":"string",
    //     "customFields":[{
    //         "id":"string",
    //         "label":"string",
    //         "value":"string",
    //         "type":"select",
    //         "order":0,
    //         "required":true,
    //         "enum":[
    //             "string"
    //         ]
    //     }]
    // }
}
