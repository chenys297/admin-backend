/*
// 添加用户
use admin_backend
db.createUser({
  user: "admin",
  pwd: "admin123456",
  roles: [
    {
      role: "dbOwner",
      db: "admin_backend",
    },
  ],
});
mongod --auth
brew services restart mongodb/brew/mongodb-community
*/
