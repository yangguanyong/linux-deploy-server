const Koa = require('koa');
const app = new Koa();
const fs = require('fs')
const path = require('path')
var cors = require('koa-cors');
var bodyParser = require('koa-bodyparser')
var registerRouter = require('./app/router/index');
const static = require('koa-static')

app.use(cors())
app.use(bodyParser())

const staticPath = './static/'
app.use(static(staticPath))

app
.use(registerRouter())

app.listen(3020);