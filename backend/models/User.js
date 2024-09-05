const mongoose = require("mongoose");
const user = mongoose.Schema({
  name: { type: String },
  mail: { type: String, unique: true },
  password: { type: String },
  isAdmin: {
    type: Boolean,
    require: true,
    default: false,
  },
});

const User = mongoose.model("User", user);
module.exports = User;
