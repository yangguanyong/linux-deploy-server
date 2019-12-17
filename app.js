const Koa = require('koa');
const app = new Koa();
const fs = require('fs')
var cors = require('koa-cors');
var bodyParser = require('koa-bodyparser')
var registerRouter = require('./app/router/index');
app.use(cors())
app.use(bodyParser())

app
.use(registerRouter())

app.listen(3020);