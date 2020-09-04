const mongoose = require("mongoose");
const dbConfig = require("../config/mongo");

// toFix: (node:6469) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
mongoose.set("useFindAndModify", false);

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

conn.on("connected", function (error) {
  console.log(`数据库连接成功...`);
});

conn.on("close", function (error) {
  console.log(`MongoDB 已断开连接.`);
});

module.exports = conn;
