const mongoose = require("mongoose");
const conn = require("../db/mongo");

const DictDetailSchema = mongoose.Schema({
  dictCode: {
    type: Number,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  label: {
    type: String,
    required: true,
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

module.exports = conn.model("DictDetail", DictDetailSchema, "dict_detail");
