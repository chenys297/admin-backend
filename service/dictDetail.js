class DictDetailService {
  getDictDetails({ currentPage = 1, pageSize = 10, ...params }) {
    ctx.body = "DictDetailService getDictDetails";
  }
  getDictDetail(dictDetailId) {
    ctx.body = "DictDetailService getDictDetail";
  }
  add(dictDetail) {
    ctx.body = "DictDetailService add";
  }
  delete(dictDetailId) {
    ctx.body = "DictDetailService delete";
  }
  update(dictDetail) {
    ctx.body = "DictDetailService update";
  }
}

module.exports = new DictDetailService();
