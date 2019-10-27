var { User } = require('./../model/index');

module.exports = {
  async getUser() {
    const result = await User.findAll()
    return result
  },
  async addUser(data) {
    var result = await User.create({
      NAME: data.name,
      PASSWORD: data.password,
      ACCOUNT: data.account,
      RULE_ID: data.rule_id,
      HEAD_PIC: data.head_pic,
      STATUS: data.status,
      REGISTER_TIME: data.register_time
    });
    return result
  }
}