const axios =  require('../../auth/applicationAuth')

exports.get = (req,res,next)=>{
    const  jobId = req.params.jobId;

    axios.get('/jobs/'+jobId+'/applications').then(function(data){

        if(data){
            res.status(200).send(data)
            console.log(data)
        }
            
    }).catch(function(error){
        if(error){
            res.status(401).send(error)
            console.log(error);
        }
    })
    
    // {
    //     "results":[{
    //         "id":jobId,
    //         "score":0,
    //         "source":"google",
    //         "sourceOther":"string",
    //         "status":"in_process",
    //         "isCompanyEmployee":true,
    //         "employeeEmail":"string",
    //         "registrationComplete":true,
    //         "referred":true,
    //         "referredBy":"string",
    //         "referralStatus":"pending",
    //         "feedbackSent":true,
    //         "matching":0,
    //         "disapprovalReason":"hired_by_another_company",
    //         "disapprovalReasonNotes":"string",
    //         "hiringType":"employee_admission",
    //         "hiringDate":"2021-04-28T12:24:32.982Z",
    //         "createdAt":"2021-04-28T12:24:32.982Z",
    //         "updatedAt":"2021-04-28T12:24:32.982Z",
    //         "endedAt":"2021-04-28T12:24:32.982Z",
    //         "partnerName":"99hunters",
    //         "job":{
    //             "id":0,
    //             "name":"string",
    //             "status":"approved"
    //         },
    //         "currentStep":{
    //             "id":0,
    //             "name":"string"
    //         },
    //         "tags":["string"],
    //         "manualCandidate":[{
    //             "id":0,
    //             "name":"string",
    //             "lastName":"string",
    //             "email":"user@example.com",
    //             "mobileNumber":"string",
    //             "linkedinProfileUrl":"string",
    //             "insertionSource":"candidate_active_contact"
    //         }],
    //         "candidate":[{
    //             "id":0,
    //             "name":"string",
    //             "lastName":"string",
    //             "email":"user@example.com",
    //             "identificationDocument":"string",
    //             "disabilities":true,
    //             "disabilityTypes":[
    //                 "physical_disability"
    //             ],
    //             "birthdate":"2021-04-28",
    //             "gender":"male",
    //             "addressZipCode":"string",
    //             "addressNumber":"string",
    //             "addressStreet":"string",
    //             "addressCity":"string",
    //             "addressState":"string",
    //             "addressStateShortName":"string",
    //             "addressCountry":"string",
    //             "addressCountryShortName":"string",
    //             "mobileNumber":"string",
    //             "phoneNumber":"string",
    //             "areasOfInterest":[
    //                 "marketing"
    //             ],
    //             "schooling":"elementary_school",
    //             "schoolingStatus":"complete",
    //             "academicQualifications":[{
    //                 "id":0,
    //                 "formation":"graduation",
    //                 "institution":"string",
    //                 "course":"string",
    //                 "status":"complete",
    //                 "startMonth":0,
    //                 "startYear":0,
    //                 "endMonth":0,
    //                 "endYear":0
    //             }],
    //             "workExperiences":[{
    //                 "id":0,
    //                 "role":"string",
    //                 "companyName":"string",
    //                 "activitiesPerformed":"string",
    //                 "startMonth":0,
    //                 "startYear":0,
    //                 "endMonth":0,
    //                 "endYear":0
    //             }],
    //             "languages":[{
    //                 "language":"german",
    //                 "level":"basic"
    //             }]
    //         }],
    //         "additionalQuestions":[{
    //             "question":"string",
    //             "answer":[
    //                 "string"
    //             ]
    //         }],
    //     }]
    // }
}