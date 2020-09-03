const mongoose = require("mongoose");
const dbConfig = require("../config/mongo");

const conn = mongoose.createConnection(
  `mongodb://${dbConfig.USER}:${dbConfig.PWD}@${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB_NAME}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

conn.on("error", function (error) {
  console.error(`数据库连接失败：${error}`);
});

conn.on("open", function (error) {
  console.log(`数据库连接成功...`);
});

module.exports = conn;
