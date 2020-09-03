class DictDetailController {
  async getDictDetails(ctx, next) {
    ctx.body = "DictDetailController getDictDetails";
  }
  async getDictDetail(ctx, next) {
    ctx.body = "DictDetailController getDictDetail";
  }
  async add(ctx, next) {
    ctx.body = "DictDetailController add";
  }
  async delete(ctx, next) {
    ctx.body = "DictDetailController delete";
  }
  async update(ctx, next) {
    ctx.body = "DictDetailController update";
  }
}

module.exports = new DictDetailController();
