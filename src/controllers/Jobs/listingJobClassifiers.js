exports.get = (req,res,next)=>{
    res.status(200).send({
            "id":0,
            "type":"approver",
            "user":{
                "id":0,
                "name":"string"
            }
    })   
}