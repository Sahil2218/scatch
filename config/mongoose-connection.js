const mongoose = require('mongoose');
const config = require('config');
const dbgr = require('debug')("development:mongoose");
mongoose
.connect(`${config.get("MONGODB_URL")}/scatch`)
.then((value) => {
    dbgr("conneted");
    
})
.catch((err) => {
    dbgr(err);
    
})

module.export =mongoose.connection;