var Router = require('koa-router')
var router = new Router();
const auth = require('../middeware/auth')

var UserController = require('./../controller/user')

router.get('/user/login', UserController.loginHandle)

router.post('/user/register', UserController.registerHandle)

router.get('/user/getUserInfo', auth, UserController.getUserInfoHandle)

router.get('/user/logout', UserController.logoutHandle)

module.exports = router