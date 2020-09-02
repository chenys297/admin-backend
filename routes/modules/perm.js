const Router = require("@koa/router");
const PermController = require("../../controller/perm");
const router = new Router({
  prefix: "/perm",
});

router.get("/perms", PermController.getPerms);

router.get("/perm", PermController.getPerm);

router.post("/add", PermController.add);

router.get("/delete", PermController.delete);

router.post("/update", PermController.update);

module.exports = router;
