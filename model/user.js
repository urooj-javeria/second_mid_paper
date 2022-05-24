const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String,
    email: String,
    pnumber:Number,
    country:String,
    state:String,
    city:String,
    address:String,
    zip:Number,
    image: String,
})

const User = mongoose.model("User", userSchema);
module.exports = User;