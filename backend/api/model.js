const mongoose = require('mongoose');
const UserSchema = {
    name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      }
};
module.exports = mongoose.model("User", UserSchema);