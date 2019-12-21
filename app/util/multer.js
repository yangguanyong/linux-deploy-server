const staticPath = './static/'
const multer = require('@koa/multer')
const upload = multer({ dest: staticPath })

module.exports = upload