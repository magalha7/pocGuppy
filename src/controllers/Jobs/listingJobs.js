const axios = require('../../auth/applicationAuth')

exports.get = (req,res,next)=>{
    
    axios.get('/jobs').then(function(data){
        
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
    //     "code":"string",
    //     "name":"string",
    //     "status":"draft",
    //     "type":"vacancy_type_apprentice",
    //     "publicationType":"external",
    //     "numVacancies":0,
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
    //     "remoteWorking":true,
    //     "reason":"staff_increase",
    //     "image":"string",
    //     "socialMediaImage":"string",
    //     "applicationDeadline":"2021-05-03",
    //     "careerPageId":0,
    //     "careerPageName":"string",
    //     "vacancyCodes":[{
    //         "id":0,
    //         "code":"string",
    //         "status":"valid",
    //         "errorMessage":"string"
    //     }],
    //     "managerId":0,
    //     "managerName":"string",
    //     "managerEmail":"user@example.com",
    //     "recruiterId":0,
    //     "recruiterName":"string",
    //     "recruiterEmail":"user@example.com",
    //     "hiringDeadline":"2021-05-03",
    //     "salary":{
    //         "currency":"string",
    //         "startsAt":0,
    //         "endsAt":0
    //     },
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
    //     }],
    //     "jobRatingCriterias":[{
    //         "jobId":0,
    //         "name":"string"
    //     }],
    //     "cancelReason":"staff_increase_or_substitution_postponed",
    //     "cancelReasonNotes":"string",
    //     "cancelAt":"2021-05-03T16:57:44.183Z",
    //     "createdAt":"2021-05-03T16:57:44.183Z",
    //     "updatedAt":"2021-05-03T16:57:44.183Z",
    //     "publishedAt":"2021-05-03T16:57:44.183Z",
    //     "approvedAt":"2021-05-03T16:57:44.183Z",
    //     "disapprovedAt":"2021-05-03T16:57:44.183Z",
    //     "closedAt":"2021-05-03T16:57:44.183Z",
    //     "lastFreezeDate":"2021-05-03T16:57:44.183Z",
    //     "lastUnFreezeDate":"2021-05-03T16:57:44.183Z",
    //     "creatorId":0,
    //     "creatorName":"string",
    //     "creatorEmail":"user@example.com"
    // }
}