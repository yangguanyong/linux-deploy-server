var Router = require('koa-router')
var router = new Router();

router.post('/mock/upload/file', async (ctx, next) => {
  // 处理文件流
  ctx.body = {
    code: 200,
    message: '成功',
    response: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2331005001,889005680&fm=26&gp=0.jpg'
  }
})

module.exports = router