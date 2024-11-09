const mongoose = require('mongoose');

 const ownersSchema =mongoose.Schema({
    fullname: {
        type: String,
        minlength: 3,
        trim: true,
    },
    email: String,
    password: String,
   
    products : {
        type:Array,
        default:[]
    },
   
    picture :String,
 });

 module.exports =mongoose.model("owners", ownersSchema);