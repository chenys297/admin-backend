const mongoose = require("mongoose");
const conn = require("../db/mongo");

const MenuSchema = mongoose.Schema({
  // 菜单编号
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  pId: {
    ref: "Menu",
    type: mongoose.Schema.Types.ObjectId,
    default: 0,
  },
  name: {
    type: String,
    required: true,
  },
  // 是否显示
  show: {
    type: Number,
    required: true,
    default: 0,
  },
  // 如果是菜单的话 => 菜单对应的路由 如果是按钮的话 => 不用填
  url: {
    type: String,
  },
  component: {
    type: String,
  },
  // 如果是显示的菜单，可通过这个设置菜单前的icon
  icon: {
    type: String,
  },
  // 菜单类型 1:菜单 2:按钮
  type: {
    type: Number,
    required: true,
  },
  // 菜单title
  title: {
    type: String,
    required: true,
  },
  // 此字段用在菜单排序
  order: {
    type: Number,
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

module.exports = conn.model("Menu", MenuSchema, "menu");
