const mongoose = require('mongoose');
const UserSchema = {
    name: String,
    age: String,
    about: String,
    job: String,
    location: String,
    gender: String,
    lookingFor : String,
};
module.exports = mongoose.model("User", UserSchema);