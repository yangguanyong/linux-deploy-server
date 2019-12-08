export default {
  /**
   * 
   * @param {*} ctx 
   * @param {*} next
   */
  async loginHandle (ctx, next) {
    // 1.根据用户和密码校验
    // 2.如果校验未通过，登录失败
    // 3.如果校验通过，根据用户id，时间戳等信息生成登录凭证（token），将token传递到客户端
    // 4.后续接口携带token，服务端解析token，获取用户信息
    const username = ctx.username
    const password = ctx.password
    let user = await this.validateUser(username, password)
    if (!user) {
      user = await User.create({
        username,
        paassword
      })
    }
    const id = user.id
    const sessionKey = encode(id)
    await User.update({
      id: id
    }, {
      lastLogin: Date.now()
    })
    return {
      sessionKey
    }
  },
  async validateUser (username, psw) {
    // 根据username查找用户，如果找不到，返回“请注册”
    // 如果能找到用户，匹配密码，如果密码错误，返回“密码错误”
    // 如果密码匹配成功，返回“登录成功”
  }
}