const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  mobile_no: {
    type: Number,
    required: true,
    max: 9999999999,
    min: 1000000000,
  },
});

module.exports = mongoose.model("User", userSchema);
