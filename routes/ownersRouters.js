const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owners-model");

if (process.env.NODE_ENV === "development") {
    
    router.post("/create", async function(req, res) {
        try {
            
            let owners = await ownerModel.find();
            if (owners.length > 0) {
                return res.status(503).send("An owner already exists.");
            }
            
            
            let { fullname, email, password } = req.body;
            
            
            let createowner = await ownerModel.create({
                fullname,
                email,
                password,
            });
            
            
            req.flash("success", "Owner created successfully.");
            res.status(201).send(createowner);   
        } catch (error) {
            
            res.status(500).send("An error occurred while creating the owner.");
        }
    });
}


router.get("/admin", function(req, res) {
    let success = req.flash("success");
    res.render("createproducts", { success });
});

module.exports = router;
