const staticPath = './static/'
// const multer = require('@koa/multer')
// const upload = multer({ dest: staticPath })

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

module.exports = multipartMiddleware