const mongoose = require("mongoose");
const conn = require("../db/mongo");
const regularRules = require("../utils/regularRules");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 12,
    minLength: 4,
    trim: true,
  },
  gender: {
    type: Number,
    validate(val) {
      return [0, 1].includes(val);
    },
  },
  email: {
    type: String,
    match: regularRules.email,
    // validate(val) {
    //   return regularRules.email.test(val);
    // },
  },
  role: {
    type: Array,
    default: [],
  },
  password: {
    type: String,
    required: true,
    minLength: 18,
  },
  status: {
    type: Number,
    default: 1,
    validate(val) {
      return [0, 1].includes(val);
    },
  },
  createTime: {
    type: Date,
    default: Date.now,
  },
  updateTime: {
    type: Date,
    default: Date.now,
  },
  operator: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = conn.model("User", UserSchema, "user");
