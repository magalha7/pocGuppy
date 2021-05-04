exports.get = (req,res,next)=>{
    res.status(200).send({
            "id":0,
            "userId":0,
            "text":"string",
            "hidden":true,
            "createdAt":"2021-04-28T17:13:01.765Z",
            "updatedAt":"2021-04-28T17:13:01.765Z"
    })
}