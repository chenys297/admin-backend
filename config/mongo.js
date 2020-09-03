// To have launchd start mongodb/brew/mongodb-community now and restart at login:
//   brew services start mongodb/brew/mongodb-community
// Or, if you don't want/need a background service you can just run:
//   mongod --config /usr/local/etc/mongod.conf
const HOST = "localhost";

const PORT = 27017;

const DB_NAME = "admin_backend";

const USER = "admin";

const PWD = "admin123456";

module.exports = {
  HOST,
  PORT,
  DB_NAME,
  USER,
  PWD,
};
