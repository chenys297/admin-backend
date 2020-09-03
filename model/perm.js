const mongoose = require("mongoose");
const conn = require("../db/mongo");

const PermSchema = mongoose.Schema({
  // 权限用menuCode去对应，比较好配置
  menuCode: {
    type: Number,
    required: true,
  },
  roleId: {
    ref: "Role",
    type: mongoose.Schema.Types.ObjectId,
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
  operator: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = conn.model("Perm", PermSchema, "perm");
