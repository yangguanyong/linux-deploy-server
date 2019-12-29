module.exports = {
  async uploadHandle(ctx, next) {
    const body = {
      code: 200,
      message: 'success',
      response: null
    }
    const files = ctx.request.files
    if (!files) {
      ctx.message = 'fail',
      response = '上传文件获取失败'
    } else {
      const fileName = files.data.name
      // const origin = ctx.request.origin
      const origin = ctx.header.origin
      // const staticPath = '/static/'
      if (!fileName) {
        ctx.message = 'fail',
        response = '获取文件名称失败'
      } else {
        body.response = `${origin}/${fileName}`
      }
    }
    ctx.body = body
  }
}