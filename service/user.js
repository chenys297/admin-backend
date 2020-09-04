class UserService {
  login({ username, password, captch }) {
    ctx.body = "UserService login";
  }

  logout({ token }) {
    ctx.body = "UserService logout";
  }

  getUserList({ currentPage = 1, pageSize = 10, ...params }) {
    ctx.body = "UserService getUserList";
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
