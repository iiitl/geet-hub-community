const mongoose = require("mongoose");
const Contracts = new mongoose.Schema({
   contractlist:[{
    id:String,
    track:String,
    genre:String,
    author:String,
    link:String
   }]
});


const contract = new mongoose.model("Contracts",Contracts);
module.exports = contract;