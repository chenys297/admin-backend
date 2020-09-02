class DictController {
  async getDicts(ctx, next) {
    ctx.body = "DictController getDicts";
  }
  async getDict(ctx, next) {
    ctx.body = "DictController getDict";
  }
  async add(ctx, next) {
    ctx.body = "DictController add";
  }
  async delete(ctx, next) {
    ctx.body = "DictController delete";
  }
  async update(ctx, next) {
    ctx.body = "DictController update";
  }
}

module.exports = new DictController();
