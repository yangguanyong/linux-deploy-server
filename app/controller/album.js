var AlbumService = require('./../service/album')
var PhotoService = require('./../service/photo')

module.exports = {
  async getListHandle(ctx, next) {
    // 搜索出album
    // 搜索出photos
    // 根据id过滤出photo数量
    const body = {
      code: 200,
      message: 'success',
      response: null
    }
    const albumList = await AlbumService.getAlbum()
    const photoList = await PhotoService.getPhotos()
    body.response = {
      albumList: albumList,
      photoList: photoList
    }
    ctx.body = body
  },
  async getAlbumDetailHandle(ctx, next) {
    // 根据id查出album
    // 根据id查出photos
    const body = {
      code: 200,
      message: 'success',
      response: null
    }
    ctx.body = body
  }
}