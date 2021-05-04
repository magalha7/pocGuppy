exports.get = (req,res,next)=>{
    res.status(200).send({
            "id":"string",
            "label":"string",
            "type":"select",
            "order":0,
            "required":true,
            "enum":[
                "string"
            ]
    })
}