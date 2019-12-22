var Router = require('koa-router')
var router = new Router();
const auth = require('../middeware/auth')

var UserController = require('./../controller/user')

router.get('/api/user/login', UserController.loginHandle)

router.post('/api/user/register', UserController.registerHandle)

router.get('/api/user/getUserInfo', auth, UserController.getUserInfoHandle)

router.get('/api/user/logout', UserController.logoutHandle)

module.exports = router