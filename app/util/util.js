const path = require('path');
const fs = require('fs');

module.exports = {
  /**
  * @description 判断文件夹是否存在 如果不存在则创建文件夹
  */
  checkDirExist: (p) => {
    if (!fs.existsSync(p)) {
      fs.mkdirSync(p)
    }
  },
  // 获取文件后缀
  getUploadFileExt(name) {
    let ext = name.split('.')
    return ext[ext.length - 1]
  },
  // 生成随机文件名
  randomString(len) {
    len = len || 32
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678' /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    var maxPos = $chars.length
    var pwd = ''
    for (i = 0; i < len; i++) {
      pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return pwd
  }
}