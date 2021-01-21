const mongoose = require('mongoose');

var uri = "mongodb+srv://dbUser:12345@cluster0.mledn.mongodb.net/test?retryWrites=true&w=majority"

//optional settings 

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

//connect atlas using mongoose connect method
// using promisses 

mongoose.connect(uri, options).then(
    () => {console.log("Database connection established!");},
    err => {console.log("Error connecting Database instance due to:", err);}
    
);