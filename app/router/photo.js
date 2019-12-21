var Router = require('koa-router')
var router = new Router()
const auth = require('../middeware/auth')

var PhotoController = require('./../controller/photo')

router.post('/photo/addPhoto', auth, PhotoController.addPhotoHandle)

module.exports = router