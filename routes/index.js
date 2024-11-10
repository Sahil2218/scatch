const express = require("express")
const router=express.Router()
const isloggedin = require("../middlewares/isloggedin");
const productModel = require("../models/product-model");
router.get('/', (req, res) => {
    const errorMessages = ["An error occurred"];
    res.render('index', { error: errorMessages })
  })
  
  router.get('/shop',isloggedin, async (req, res) => {
    let products = await productModel.find();
    res.render("shop" ,{ products })
  });   

  router.get('/logout',isloggedin, (req, res) => {
    res.render("shop")
  });
  module.exports = router

