class UserController {
  async login(ctx, next) {
    ctx.body = "UserController login";
  }

  async logout(ctx, next) {
    ctx.body = "UserController logout";
  }

  async getUsers(ctx, next) {
    ctx.body = "UserController getUsers";
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
