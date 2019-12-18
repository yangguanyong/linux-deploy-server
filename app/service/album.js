var { Album } = require('./../../models/index');

module.exports = {
  async getAlbum(query) {
    const result = await Album.findAll(query)
    return result
  }
}