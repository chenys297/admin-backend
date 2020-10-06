const Koa = require("koa");
const app = new Koa();
const routes = require("./routes");
const cors = require("koa2-cors");
// const conn = require("./db/mongo");

// const initData = require("./mock/init");

app.on("error", (err) => {
  console.log("出错了：" + err);
});

app.use(cors());
app.use(routes());
app.listen(3100);

// 初始化数据
// (async function () {
//   await initData();
//   conn.close();
// })();
