class SystemController {
  async getCaptcha(ctx, next) {
    ctx.body = "SystemController getCaptcha";
  }
}

module.exports = new SystemController();
