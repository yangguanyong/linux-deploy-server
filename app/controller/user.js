var userService = require('./../service/user')

// 在此处进行一些404的封装
// 对query的一些操作，需要封装提取

module.exports = {
  async getUser(ctx, next) {
    const result = await userService.getUser()
    ctx.body = {
      code: 0,
      message: '成功',
      response: result
    }
  },
  async addUserInfo(ctx, next) {
    var result = await userService.addUser({
      name: "杨观勇",
      password: "Ygy5583330",
      account: 'yangguanyong',
      rule_id: 1,
      head_pic: '',
      status: 0,
      register_time: new Date()
    });
    ctx.body = {
      code: 0,
      messgae: '成功',
      response: result
    }
  }
}