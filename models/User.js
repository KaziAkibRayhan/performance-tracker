const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  idNumber: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
  },
  date: { type: Date, default: Date.now },
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
