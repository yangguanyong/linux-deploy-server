module.exports = async function (ctx, next) {
  // 获取token
  // 如果没有token，抛出错误
  // 如果有token则根据token查找用户，就是说每个接口都需要找一次用户
  // 如果找到用户，把用户信息设置到context中，方便后面使用
  // 如果找不到用户，抛出错误，token过期
}

const findByToken = function async (token) {
  const { id, time } = decode(token)
}