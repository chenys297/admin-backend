const { response_200 } = require("../utils/index");
const MenuService = require("../service/menu");

class MenuController {
  async getMenus(ctx, next) {
    try {
      const menus = await MenuService.getMenus(ctx.query);
      ctx.body = response_200(menus);
    } catch (error) {
      throw new Error("[MenuController.getMenus] error：" + error);
    }
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
