var { Photo } = require('./../../models/index')

module.exports = {
  async getPhotos(query) {
    const result = await Photo.findAll(query)
    return result
  }
}