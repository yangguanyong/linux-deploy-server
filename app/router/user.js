var Router = require('koa-router')
var router = new Router();

var UserController = require('./../controller/user')
// var UserController = require('./../controller/login')

router.get('/searchUser', UserController.getUser)

router.get('/insertUser', UserController.addUserInfo)

// router.get('/login', UserController.loginHandle)

module.exports = router