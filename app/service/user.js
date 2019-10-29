var { User } = require('./../model/index');

module.exports = {
  async getUser() {
    const result = await User.findAll()
    return result
  },
  async addUser(data) {
    var result = await User.create({
      name: data.name,
      password: data.password,
      account: data.account,
      ruleId: data.rule_id,
      headPic: data.head_pic,
      status: data.status,
      registerTime: data.register_time
    });
    return result
  }
}