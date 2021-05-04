exports.get = (req,res,next)=>{
    res.status(200).send({
            "id":"string",
            "name":"string",
            "subject":"string",
            "body":"string",
            "type":"interview_scheduling"
    })
}