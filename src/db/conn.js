const mongoose = require("mongoose");
const DB = 'mongodb+srv://geethubadmin:newadminpass@geet-hub-cluster.sqilkzy.mongodb.net/Contracts?retryWrites=true&w=majority';
mongoose.connect(DB).then(()=>{
    console.log("connection successful");
}).catch((err)=>console.error(err));