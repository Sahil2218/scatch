const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owners-model");
// const { log } = require("debug/src/node");
if(process.env.NODE_ENV ==="development"){
router.post("/create",async function(req,res){
    let owners = await ownerModel.find();
    if(owners.length>0) {
        return res
        .status(503)
        .send("you no in ok understand that ok good ok")
    }
    let {fullname ,email ,password } = req.body;
    let createowner = await ownerModel.create({
        fullname,
        email,
        password,
    });
    res.status(201).send(createowner);   
});
}

router.get("/",function(req,res){
    res.send("hery");
});
module.exports = router;
    
