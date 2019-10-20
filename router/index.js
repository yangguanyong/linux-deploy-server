var Router = require('koa-router')
var router = new Router();

var User = require('./../server/server-sequelize');

router.get('/search', async function (ctx, next) {
  var result = await User.findAll();
  ctx.body = JSON.stringify(result, null, 4);
})

router.get('/insert', async function (ctx, next) {
  var result = await User.create({ firstName: "李", lastName: "少凡" });
  ctx.body = '创建成功' + JSON.stringify(result);
})

module.exports = router