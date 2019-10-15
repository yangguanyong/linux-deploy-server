const Koa = require('koa');
const app = new Koa();
var cors = require('koa-cors');
app.use(cors())

app.use(async ctx => {
  ctx.body = 'Hello World By Pm2 !';
});

app.listen(3000);