const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://devnode:Paramore123@cluster0.xoy6x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",  (err) => {
    if(err) console.log("error", err)
    
    else console.log("Mongoose conectado no mongoDB")
    
    
});

