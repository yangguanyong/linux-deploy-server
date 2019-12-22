var Router = require('koa-router')
var router = new Router()
const auth = require('../middeware/auth')

var AlbumController = require('./../controller/album')

router.get('/api/album/getList', auth, AlbumController.getListHandle)

router.post('/api/album/add', auth, AlbumController.addAlbumHandle)

router.get('/api/album/getDetail', auth, AlbumController.getAlbumDetailHandle)

module.exports = router