const Router = require("@koa/router");
const RoleController = require("../../controller/role");
const router = new Router({
  prefix: "/role",
});

router.get("/list", RoleController.getRoles);

router.get("/geRole", RoleController.getRole);

router.post("/add", RoleController.add);

router.get("/delete", RoleController.delete);

router.post("/update", RoleController.update);

router.post("/allocPerm", RoleController.allocPerm);

module.exports = router;
