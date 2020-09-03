const Router = require("@koa/router");
const DictDetailController = require("../../controller/dictDetail");
const router = new Router({
  prefix: "/dict/detail",
});

router.get("/list", DictDetailController.getDictDetails);

router.get("/getDictDetail", DictDetailController.getDictDetail);

router.post("/add", DictDetailController.add);

router.get("/delete", DictDetailController.delete);

router.post("/update", DictDetailController.update);

module.exports = router;
