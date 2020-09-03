const Router = require("@koa/router");
const MenuController = require("../../controller/menu");
const router = new Router({
  prefix: "/menu",
});

router.get("/menus", MenuController.getMenus);

router.get("/menu", MenuController.getMenu);

router.post("/add", MenuController.add);

router.get("/delete", MenuController.delete);

router.post("/update", MenuController.update);

module.exports = router;
