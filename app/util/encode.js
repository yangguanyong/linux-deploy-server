const cryto = require('cryto')
const secret = 'yangguanyong' // 密钥
const alg = 'aes-256-cbc' // 加密算法
function encode (id) {
  // 加密
  const encoder = cryto.createCipher(alg, secret) // 创建加密器
  const str = [id, Date.now(), 'ygy'].join('|') // 创建加密字符串
  let encryted = encoder.update(str, 'utf8', 'hex') //
  encryted += encoder.final('hex')
  return encryted
}

function decode (str) {
  // 解密
}