// var { User } = require('./../model/index');
var { User } = require('./../../models/index');

module.exports = {
  async getUser(query) {
    const result = await User.findAll(query)
    return result
  },
  async addUser(data) {
    var result = await User.create({
      name: data.username || '',
      type: data.type || 1, // 默认为普通用户
      albums: data.albums || 0,
      photos: data.photos || 0,
      account: data.account || '',
      password: data.password || '',
      lastLogin: data.lastLogin || ''
    });
    return result
  },
  async updateUser(data, query) {
    var result = await User.update(data, {
      where: query
    })
    return result
  }
}