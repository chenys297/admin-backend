const dictRouter = require("./modules/dict");
const permRouter = require("./modules/perm");
const menuRouter = require("./modules/menu");
const roleRouter = require("./modules/role");
const userRouter = require("./modules/user");
const systemRouter = require("./modules/system");

const combineRoutes = require("koa-combine-routers");

module.exports = combineRoutes(
  dictRouter,
  permRouter,
  menuRouter,
  roleRouter,
  userRouter,
  systemRouter
);
