var Router = require('koa-router')
var router = new Router()
const auth = require('../middeware/auth')
var upload = require('../util/multer')

var UploadController = require('./../controller/upload')

router.post(
  '/api/upload/file',
  auth,
  UploadController.uploadHandle)

module.exports = router