const Koa = require('koa');
const app = new Koa();
const fs = require('fs')
const path = require('path')
var cors = require('koa-cors');
var bodyParser = require('koa-bodyparser')
const koaBody = require('koa-body');
var registerRouter = require('./app/router/index');
const static = require('koa-static')
const util = require('./app/util/util.js')

app.use(cors())
// app.use(bodyParser())

const staticPath = './static/'
app.use(static(staticPath))

app.use(koaBody({
  multipart: true, // 支持文件上传
  formidable: {
    uploadDir: path.join(__dirname, staticPath), // 设置文件上传目录
    keepExtensions: false, // 保持文件的后缀
    onFileBegin:(name, file) => { // name是上传的body名称
      const fileType = util.getUploadFileExt(file.name) // 后缀
      const uploadPath = path.join(__dirname, staticPath)
      try {
        util.checkDirExist(uploadPath) // 判断是否有目录
      } catch (err) {
        console.log('生成static静态目录失败')
      }
      const fileName = util.randomString(15) // 生成文件名
      file.path = `${uploadPath}${fileName}.${fileType}`
      file.name = `${fileName}.${fileType}`
    }
  }
}))

app
.use(registerRouter())

app.listen(3020);