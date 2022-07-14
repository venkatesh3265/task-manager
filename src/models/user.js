const mongoose = require("mongoose");
const validator = require("validator");
const { default: isEmail } = require("validator/lib/isEmail");

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    trim: true,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be positive number");
      }
    },
  },
  password: {
    type: String,
    required: true,
    lowercase: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("password cannot contain password");
      }
    },
  },
});

module.exports = User;
