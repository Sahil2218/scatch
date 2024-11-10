const express = require("express")
const router = express.Router()
const userModel = require("../models/user-model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const { registeruser,loginuser,logout }= require("../controllers/authcontollers")
router.get("/",function(req,res){
    res.send("hery")
});
router.post("/register",registeruser)
router.post("/login",loginuser)
router.post("/loginout",logout)
module.exports = router
    
