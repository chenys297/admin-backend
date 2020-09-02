const Router = require("@koa/router");
const UserController = require("../../controller/user");
const router = new Router({
  prefix: "/user",
});

router.get("/list", UserController.getUsers);

router.get("/user", UserController.getUser);

router.post("/add", UserController.add);

router.get("/delete", UserController.delete);

router.post("/update", UserController.update);

router.post("/allocRole", UserController.allocRole);

module.exports = router;
