class MenuController {
  async getMenus(ctx, next) {
    ctx.body = "MenuController getMenus";
  }
  async getMenu(ctx, next) {
    ctx.body = "MenuController getMenu";
  }
  async add(ctx, next) {
    ctx.body = "MenuController add";
  }
  async delete(ctx, next) {
    ctx.body = "MenuController delete";
  }
  async update(ctx, next) {
    ctx.body = "MenuController update";
  }
}

module.exports = new MenuController();
