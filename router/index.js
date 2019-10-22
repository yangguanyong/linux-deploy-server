var Router = require('koa-router')
var router = new Router();

var { User, Paper } = require('./../server/server-models');

router.get('/searchUser', async function (ctx, next) {
  var result = await User.findAll();
  ctx.body = JSON.stringify(result, null, 4);
})

router.get('/insertUser', async function (ctx, next) {
  var result = await User.create({ firstName: "li", lastName: "shaofan" });
  ctx.body = '创建成功' + JSON.stringify(result);
})

router.get('/searchPaper', async function (ctx, next) {
  var result = await Paper.findAll();
  ctx.body = JSON.stringify(result, null, 4);
})

router.get('/insertPaper', async function (ctx, next) {
  var result = await Paper.create({ title: "yang", content: "guanyong" });
  ctx.body = '创建成功' + JSON.stringify(result);
})

module.exports = router