class RoleService {
  getRoles({ currentPage = 1, pageSize = 10, ...params }) {
    ctx.body = "RoleService getRoles";
  }
  getRole(roleId) {
    ctx.body = "RoleService getRole";
  }
  add(role) {
    ctx.body = "RoleService add";
  }
  delete(roleId) {
    ctx.body = "RoleService delete";
  }
  update(role) {
    ctx.body = "RoleService update";
  }
  allocPerm(roleId, permIds) {
    ctx.body = "RoleService allocPerm";
  }
}

module.exports = new RoleService();
