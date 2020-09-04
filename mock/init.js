const menus = require("./init/menu");
const roles = require("./init/role");
const dicts = require("./init/dict");
const dictDetails = require("./init/dictDetail");
const users = require("./init/user");
const MenuModel = require("../model/menu");
const RoleModel = require("../model/role");
const DictModel = require("../model/dict");
const DictDetailModel = require("../model/dictDetail");
const UserModel = require("../model/user");

module.exports = async function initData() {
  console.log("开始初始化数据...");
  const dictResult = await DictModel.create(dicts);
  console.log("字典数据初始化完成.", dictResult);
  const dictDetailResult = await DictDetailModel.create(dictDetails);
  console.log("字典详情列表数据初始化完成.", dictDetailResult);
  const menuResult = await MenuModel.create(menus);
  console.log("菜单数据初始化完成.", menuResult);
  const roleResult = await RoleModel.create(roles);
  console.log("角色数据初始化完成.", roleResult);
  const userResult = await UserModel.create(users);
  console.log("字典数据初始化完成.", userResult);
};
