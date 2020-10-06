const MenuModel = require("../model/menu");

class MenuService {
  async getMenus(params) {
    try {
      let menus = [];
      if (params.currentPage && params.pageSize) {
        menus = await MenuModel.find({})
          .skip((currentPage - 1) * pageSize)
          .limit(pageSize)
          .sort({ id: -1 })
          .exec();
      } else {
        menus = await MenuModel.find({}).sort({ id: -1 }).exec();
      }
      const total = await MenuModel.countDocuments({});
      return {
        list: menus,
        total,
      };
    } catch (error) {
      throw new Error("[MenuService.getMenus] error: " + error);
    }
  }
  getMenu(menuId) {
    ctx.body = "MenuService getMenu";
  }
  add(menu) {
    ctx.body = "MenuService add";
  }
  delete(menuId) {
    ctx.body = "MenuService delete";
  }
  update(menu) {
    ctx.body = "MenuService update";
  }
}

module.exports = new MenuService();
