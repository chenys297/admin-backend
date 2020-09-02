const dictRouter = require("./modules/dict");
const permRouter = require("./modules/perm");
const roleRouter = require("./modules/role");
const userRouter = require("./modules/user");

const combineRoutes = require("koa-combine-routers");

module.exports = combineRoutes(dictRouter, permRouter, roleRouter, userRouter);
