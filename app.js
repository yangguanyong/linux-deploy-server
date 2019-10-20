const Koa = require('koa');
const app = new Koa();
var cors = require('koa-cors');
app.use(cors())

// require('./server/server-sequelize');

var router = require('./router/index');
app
.use(router.routes())
.use(router.allowedMethods());

app.listen(3000);