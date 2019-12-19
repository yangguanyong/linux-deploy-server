var AlbumService = require('./../service/album')
var PhotoService = require('./../service/photo')

module.exports = {
  /**
   * 
   * 搜索出album
     搜索出photos
     根据id过滤出photo数量
   */
  async getListHandle(ctx, next) {
    const body = {
      code: 200,
      message: 'success',
      response: null
    }
    const user = ctx.state.user
    const albumList = await AlbumService.getAlbum({
      where: {
        userId: user.id
      }
    })
    const photoList = await PhotoService.getPhotos()
    body.response = albumList
    ctx.body = body
  },
  /**
   * 
   * 根据id查出album
   * 根据id查出photos
   */
  async getAlbumDetailHandle(ctx, next) {
    const body = {
      code: 200,
      message: 'success',
      response: null
    }
    const params = ctx.request.query
    const { id } = params
    const result = await AlbumService.getAlbum({ // 查找相册
      where: { id: id }
    })
    if (result.length !== 0) {
      const album = result[0].dataValues
      const photoList = await PhotoService.getPhotos({ // 查找相册下照片
        where: {
          albumId: id
        }
      })
      album.photoList = photoList
      body.response = album
    } else {
      body.response = null
    }
    ctx.body = body
  },
  /**
   * 根据id查出album
   * 根据id查出photos
   * @param {*} ctx 
   * @param {*} next 
   */
  async addAlbumHandle(ctx, next) {
    const body = {
      code: 200,
      message: 'success',
      response: null
    }
    const data = ctx.request.body
    const { name, imgUrl } = data
    const user = ctx.state.user
    if (!name) {
      body.response = '名称为必填'
      body.message = 'fail'
    } else {
      const result = await AlbumService.addAlbum({
        name: name,
        userId: user.id,
        cover: imgUrl
      })
      body.response = result
    }
    ctx.body = body
  }
}