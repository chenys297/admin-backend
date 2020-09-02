class PermController {
  async getPerms(ctx, next) {
    ctx.body = "PermController getPerms";
  }
  async getPerm(ctx, next) {
    ctx.body = "PermController getPerm";
  }
  async add(ctx, next) {
    ctx.body = "PermController add";
  }
  async delete(ctx, next) {
    ctx.body = "PermController delete";
  }
  async update(ctx, next) {
    ctx.body = "PermController update";
  }
}

module.exports = new PermController();
