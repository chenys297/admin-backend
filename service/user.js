const UserModel = require("../model/user");

class UserService {
  login({ username, password, captch }) {
    ctx.body = "UserService login";
  }

  logout({ token }) {
    ctx.body = "UserService logout";
  }

  async getUserList(params = { currentPage: 1, pageSize: 10 }) {
    const currentPage = params.currentPage ? parseInt(params.currentPage) : 1;
    const pageSize = params.pageSize ? parseInt(params.pageSize) : 10;
    try {
      const list = await UserModel.find({})
        .skip((currentPage - 1) * pageSize)
        .limit(pageSize)
        .sort({ id: -1 })
        .exec();
      const total = await UserModel.countDocuments({});
      return {
        list,
        total,
      };
    } catch (error) {
      throw new Error("[UserService.getUserList] error: " + error);
    }
  }
  getUserInfo(userId) {
    ctx.body = "UserService getUserInfo";
  }
  add(user) {
    ctx.body = "UserService add";
  }
  delete(userId) {
    ctx.body = "UserService delete";
  }
  update(user) {
    ctx.body = "UserService update";
  }
  allocRole(userId, roleIds) {
    ctx.body = "UserService allocRole";
  }
}

module.exports = new UserService();
