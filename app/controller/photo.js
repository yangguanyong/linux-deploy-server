var PhotoService = require('./../service/photo')

module.exports = {
  async getListHandle(ctx, next) {
    const body = {
      code: 200,
      message: 'success',
      response: null
    }
    ctx.body = body
  },
  async addPhotoHandle(ctx, next) {
    const body = {
      code: 200,
      message: 'success',
      response: null
    }
    const data = ctx.request.body
    const { date, url, desc, albumId } = data
    const user = ctx.state.user
    const userId = user.id
    if (!albumId || !userId) {
      body.message = 'fail'
      body.response = '上传参数缺失'
    } else {
      const result = await PhotoService.addPhoto({
        date: date,
        url: url,
        desc: desc,
        albumId: Number(albumId),
        userId: userId
      })
      body.response = result
    }
    ctx.body = body
  }
}