var Router = require('koa-router')
var router = new Router()
const auth = require('../middeware/auth')

var AlbumController = require('./../controller/album')

router.get('/album/getList', auth, AlbumController.getListHandle)

module.exports = router