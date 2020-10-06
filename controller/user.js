const { response_200 } = require("../utils/index");
const UserService = require("../service/user");

class UserController {
  async login(ctx, next) {
    ctx.body = "UserController login";
  }

  async logout(ctx, next) {
    ctx.body = "UserController logout";
  }

  async getUsers(ctx, next) {
    try {
      const userListObj = await UserService.getUserList(ctx.query);
      ctx.body = response_200(userListObj);
    } catch (error) {
      throw new Error("[UserController.getUsers] error：" + error);
    }
  }
  async getUser(ctx, next) {
    ctx.body = "UserController getUser";
  }
  async add(ctx, next) {
    ctx.body = "UserController add";
  }
  async delete(ctx, next) {
    ctx.body = "UserController delete";
  }
  async update(ctx, next) {
    ctx.body = "UserController update";
  }
  async allocRole(ctx, next) {
    ctx.body = "UserController allocRole";
  }
}

module.exports = new UserController();
