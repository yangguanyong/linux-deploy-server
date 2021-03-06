var Router = require('koa-router')
var router = new Router();

router.get('/api/mock/user/login', async (ctx, next) => {
  ctx.body = {
    code: 200,
    message: '成功',
    response: 'token-aaa-111'
  }
})

router.get('/api/mock/user/getUserInfo', async (ctx, next) => {
  ctx.body = {
    code: 200,
    message: '成功',
    response: {
      name: '杨观勇',
      type: 0 // 0: 管理员，1：普通用户，2：禁用
    }
  }
})

router.get('/api/mock/user/logout', async (ctx, next) => {
  ctx.body = {
    code: 200,
    message: '成功',
    response: 'success'
  }
})

router.get('/api/user/testOvertimeLogout', async (ctx, next) => {
  ctx.body = {
    code: 408,
    message: '成功',
    response: '登录超时'
  }
})

router.get('/api/mock/user/register', async (ctx, next) => {
  ctx.body = {
    code: 200,
    message: '成功',
    response: 'success'
  }
})

router.get('/api/user/testNoPermisstion', async (ctx, next) => {
  ctx.body = {
    code: 403,
    message: '成功',
    response: '没有权限'
  }
})

module.exports = router