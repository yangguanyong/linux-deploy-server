const compose = require('koa-compose')
const glob = require('glob')
const { resolve } = require('path')

const registerRouter = () => {
  let routers = []
  glob.sync(resolve(__dirname, './', '*.js')).filter(value => // 从根目录开始读取文件
    value.indexOf('index.js') === -1
  ).map(router => {
    routers.push(require(router).routes())
    routers.push(require(router).allowedMethods())
  })
  return compose(routers) // koa-compose把多个中间件结合成一个中间件
}

module.exports = registerRouter