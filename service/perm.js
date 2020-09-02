class PermService {
  getPerms({ currentPage = 1, pageSize = 10, ...params }) {
    ctx.body = "PermService getPerms";
  }
  getPerm(permId) {
    ctx.body = "PermService getPerm";
  }
  add(perm) {
    ctx.body = "PermService add";
  }
  delete(permId) {
    ctx.body = "PermService delete";
  }
  update(perm) {
    ctx.body = "PermService update";
  }
}

module.exports = new PermService();
