const mongoose = require("mongoose");
const conn = require("../db/mongo");

const DictSchema = mongoose.Schema({
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  remark: {
    type: String,
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

module.exports = conn.model("Dict", DictSchema, "dict");
