var Router = require('koa-router')
var router = new Router();

router.post('/api/photo/deletePhoto', async (ctx, next) => {
  ctx.body = {
    code: 200,
    message: '成功',
    response: 1
  }
})

module.exports = router