var Router = require('koa-router')
var router = new Router();

var UserController = require('./../controller/user')

router.get('/searchUser', UserController.getUser)

router.get('/insertUser', UserController.addUserInfo)

module.exports = router