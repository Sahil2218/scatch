const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sahildayanand2218:Lx3bNCgS8tuvgL01@cluster0.twdod7s.mongodb.net/")
.then((value) => {
    console.log("conneted");
    
})
.catch((err) => {
    console.log(err);
    
})

module.export =mongoose.connection;