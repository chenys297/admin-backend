const Router = require("@koa/router");
const SystemController = require("../../controller/system");
const router = new Router({
  prefix: "/system",
});

router.get("/getCaptcha", SystemController.getCaptcha);

module.exports = router;
