var PhotoService = require('./../service/photo')

module.exports = {
  async getListHandle(ctx, next) {
    const body = {
      code: 200,
      message: 'success',
      response: null
    }
    ctx.body = body
  }
}