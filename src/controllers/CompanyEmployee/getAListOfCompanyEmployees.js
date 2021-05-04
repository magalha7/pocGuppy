exports.get = (req,res,next)=>{
    res.status(200).send({
            "id":0,
            "name":"string",
            "countryOfOrigin":"string",
            "identificationDocument":"string",
            "companyId":0
    })
}