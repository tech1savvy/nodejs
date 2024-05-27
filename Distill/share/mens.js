const mongoose = require("mongoose");
const menSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,
    trim:true
}
})
const mensRanking = mongoose.model("MensRanking", menSchema);
module.exports = mensRanking;