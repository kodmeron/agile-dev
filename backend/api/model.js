const mongoose = require('mongoose');
const UserSchema = {
    name: String,
    age: String,
};
module.exports = mongoose.model("User", UserSchema);