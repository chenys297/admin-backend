class DictService {
  getDicts({ currentPage = 1, pageSize = 10, ...params }) {
    ctx.body = "DictService getDicts";
  }
  getDict(dictId) {
    ctx.body = "DictService getDict";
  }
  add(dict) {
    ctx.body = "DictService add";
  }
  delete(dictId) {
    ctx.body = "DictService delete";
  }
  update(dict) {
    ctx.body = "DictService update";
  }
}

module.exports = new DictService();
