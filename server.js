const Koa = require("koa");
const app = new Koa();
const routes = require("./routes");
const cors = require("koa2-cors");

app.use(cors());
app.use(routes);
app.listen(3000);
