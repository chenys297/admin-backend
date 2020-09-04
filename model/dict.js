const mongoose = require("mongoose");
const conn = require("../db/mongo");

const DictSchema = mongoose.Schema({
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  // 字典类型 1:系统字典 2:业务字典
  type: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  // 是都可以更改 0: 否 1:是
  editable: {
    type: Number,
    enum: [0, 1],
    default: 0
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
});

module.exports = conn.model("Dict", DictSchema, "dict");
