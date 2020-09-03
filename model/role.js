const mongoose = require("mongoose");
const conn = require("../db/mongo");

const RoleSchema = mongoose.Schema({
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

module.exports = conn.model("Role", RoleSchema, "role");
