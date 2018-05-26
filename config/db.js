const mongoose = require("mongoose");

/* Map Global promises */
mongoose.Promise = global.Promise;
/* Connection to MongoDB */
mongoose.connect('mongodb://test:test@ds051843.mlab.com:51843/testingdb',function(){
    console.log("MongoDb Connected!")
});
