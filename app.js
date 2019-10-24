const Koa = require('koa');
const app = new Koa();
var cors = require('koa-cors');
app.use(cors())

console.log('env: ', process.env.NODE_ENV)

// require('./server/server-sequelize');

var router = require('./router/index');
app
.use(router.routes())
.use(router.allowedMethods());

app.listen(3000);