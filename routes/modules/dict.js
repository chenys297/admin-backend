const Router = require("@koa/router");
const DictController = require("../../controller/dict");
const router = new Router({
  prefix: "/dict",
});

router.get("/list", DictController.getDicts);

router.get("/getDict", DictController.getDict);

router.post("/add", DictController.add);

router.get("/delete", DictController.delete);

router.post("/update", DictController.update);

module.exports = router;
