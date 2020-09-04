const mongoose = require("mongoose");
const conn = require("../db/mongo");

const RoleSchema = mongoose.Schema({
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    maxLength: 16,
    minLength: 4,
    trim: true,
  },
  status: {
    type: Number,
    default: 1,
    enum: [0, 1],
    // validate(val) {
    //   return [0, 1].includes(val);
    // },
  },
  description: String,
  reamrk: String,
  createTime: {
    type: Date,
    default: Date.now,
  },
  updateTime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = conn.model("Role", RoleSchema, "role");
