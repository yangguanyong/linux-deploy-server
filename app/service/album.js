var { Album } = require('./../../models/index');

module.exports = {
  async getAlbum(query) {
    const result = await Album.findAll(query)
    return result
  },
  async addAlbum(data) {
    const result = await Album.create({
      name: data.name,
      photoCount: 0,
      cover: data.imgUrl || '',
      userId: data.userId
    })
    return result
  }
}