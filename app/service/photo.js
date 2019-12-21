var { Photo } = require('./../../models/index')

module.exports = {
  async getPhotos(query) {
    const result = await Photo.findAll(query)
    return result
  },
  async addPhoto(data) {
    const result = await Photo.create({
      date: data.date || '',
      url: data.url,
      desc: data.desc || '',
      albumId: data.albumId,
      userId: data.userId
    })
    return result
  }
}