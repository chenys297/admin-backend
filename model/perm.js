const mongoose = require("mongoose");
const conn = require("../db/mongo");

const PermSchema = mongoose.Schema({
  // 权限用menuCode去对应，比较好配置
  menuCode: {
    type: Number,
    required: true,
  },
  roleCode: {
    type: Number,
    required: true,
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

module.exports = conn.model("Perm", PermSchema, "perm");
