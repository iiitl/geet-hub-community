const mongoose = require("mongoose");
const DB = 'mongodb+srv://geethubadmin:@geet-hub-cluster.sqilkzy.mongodb.net/test';
mongoose.connect(DB).then(()=>{
    console.log("connection successful");
}).catch((err)=>console.error(err));