var userService = require('./../service/user')
var secretKey = require('../util/secret-key')

module.exports = async function (ctx, next) {
  // 获取token
  // 如果没有token，抛出错误
  // 如果有token则根据token查找用户，就是说每个接口都需要找一次用户
  // 如果找到用户，把用户信息设置到context中，方便后面使用
  // 如果找不到用户，抛出错误，token过期
  const token = ctx.headers.token // token存放在头部携带过去
  if (!token) {
    ctx.body = {
      code: 408,
      message: 'fail',
      response: '请求头中没有token'
    }
  }
  const user = await getUserByToken(token)
  if (user) {
    ctx.state.user = user
    await next() // 进入下一步
  } else {
    ctx.body = {
      code: 408,
      message: 'fail',
      response: 'token已过期'
    }
  }
}

const getUserByToken = async function (token) {
  const { id, timespan } = secretKey.decode(token)
  const effectiveTime = 1000 * 60 * 60 // 有效时间
  if (Date.now() - timespan > effectiveTime) {
    return null
  }
  const users = await userService.getUser({
    where: {
      id: id
    }
  })
  if (users.length !== 0) {
    return users[0].dataValues
  }
}