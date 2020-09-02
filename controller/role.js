class RoleController {
  async getRoles(ctx, next) {
    ctx.body = "RoleController getRoles";
  }
  async getRole(ctx, next) {
    ctx.body = "RoleController getRole";
  }
  async add(ctx, next) {
    ctx.body = "RoleController add";
  }
  async delete(ctx, next) {
    ctx.body = "RoleController delete";
  }
  async update(ctx, next) {
    ctx.body = "RoleController update";
  }
  async allocPerm(ctx, next) {
    ctx.body = "RoleController allocPerm";
  }
}

module.exports = new RoleController();
