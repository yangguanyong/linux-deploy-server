var userService = require('./../service/user')
var secretKey = require('../util/secret-key')

module.exports = {
  async loginHandle(ctx, next) {
    const body = {
      code: 200,
      message: 'success',
      response: ''
    }
    const params = ctx.request.query
    const { account, password } = params
    const result = await userService.getUser({
      where: {
        account: account
      }
    })
    if (result.length !== 0) {
      const user = result[0].dataValues
      if (user && user.password === password) {
        const id = user.id
        const date = Date.now()
        const token = secretKey.encode(id, date)
        await userService.updateUser({ // 更新数据库的最后登录时间
          lastLogin: date
        }, {
          id: id
        })
        body.response = token
      } else {
        body.response = '密码错误'
        body.message = 'fail'
      }
    } else {
      body.response = '账号不存在'
      body.message = 'fail'
    }
    ctx.body = body
  },
  async registerHandle(ctx, next) {
    const body = {
      code: 200,
      message: 'success',
      response: '注册成功'
    }
    const data = ctx.request.body
    const { account, username, password } = data
    const result = await userService.getUser({
      where: {
        account: account
      }
    })
    if (result.length !== 0) {
      body.message = 'fail'
      body.response = '账号已存在'
    } else {
      await userService.addUser({
        account: account,
        username: username,
        password, password
      })
      body.response = '注册成功'
    }
    ctx.body = body
  },
  async getUserInfoHandle(ctx, next) {
    const body = {
      code: 200,
      message: 'success',
      response: null
    }
    const user = ctx.state.user
    if (user) {
      body.response = user
    }
    ctx.body = body
  },
  async logoutHandle(ctx, next) { // todo: 当以后把token保存在redis中，这里做清除redis的操作
    const body = {
      code: 200,
      message: 'success',
      response: '登出成功'
    }
    ctx.body = body
  }
}