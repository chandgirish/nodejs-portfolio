const mongoose = require('mongoose');

const dbConfig = require('./config/db.config');

mongoose.connect(dbConfig.conxnURL + '/' + dbConfig.dbName, {
    useUnifiedTopology : true,
    useNewUrlParser : true
}, function(err, done){
    if(err){
        console.log("db connection failed");
    }else {
        console.log("db connected successfully");
    }

})