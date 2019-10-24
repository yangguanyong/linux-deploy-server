var Router = require('koa-router')
var router = new Router();

var { User, Paper, Report, Chear } = require('./../server/server-models');

router.get('/getEnv', (ctx, next) => {
  ctx.body = String(process.env.NODE_ENV)
})

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
  var result = await Paper.create({ title: "杨", content: "观勇" });
  ctx.body = '创建成功' + JSON.stringify(result);
})

router.get('/searchReport', async function (ctx, next) {
  var result = await Report.findAll();
  ctx.body = JSON.stringify(result, null, 4);
})

router.get('/insertReport', async function (ctx, next) {
  var result = await Report.create({ title: "杨", content: "观勇" });
  ctx.body = '创建成功' + JSON.stringify(result);
})

router.get('/searchChear', async function (ctx, next) {
  var result = await Chear.findAll();
  ctx.body = JSON.stringify(result, null, 4);
})

router.get('/insertChear', async function (ctx, next) {
  var result = await Chear.create({ title: "杨", content: "观勇" });
  ctx.body = '创建成功' + JSON.stringify(result);
})

module.exports = router