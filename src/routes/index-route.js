const express = require("express");
const router = express.Router();

//GET
router.get('/',(req,res,next)=>{
    res.status(200).send({
        title:"API POC Gupy",
        version: "v1.0.0"
    })
});

module.exports = router