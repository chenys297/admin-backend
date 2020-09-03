class MenuService {
  getMenus({ currentPage = 1, pageSize = 10, ...params }) {
    ctx.body = "MenuService getMenus";
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
