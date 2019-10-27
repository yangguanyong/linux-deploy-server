const Koa = require('koa');
const app = new Koa();
const fs = require('fs')
var cors = require('koa-cors');
var registerRouter = require('./app/router/index');
app.use(cors())

app
.use(registerRouter())

app.listen(3000);