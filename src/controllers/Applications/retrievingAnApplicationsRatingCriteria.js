exports.get = (req,res,next)=>{
    res.status(200).send({
        "id":0,
        "name":"string",
        "ratings":[{
            "id":0,
            "ratingCriteriaId":0,
            "applicationId":0,
            "candidateId":0,
            "jobId":0,
            "userId":0,
            "rating":0,
            "createdAt":"2021-04-28T17:13:01.499Z",
            "updatedAt":"2021-04-28T17:13:01.499Z"
        }]
    })
}