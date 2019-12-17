const crypto = require('crypto')
const key = Buffer.from('9vApxLk5G3PAsJrM', 'utf8')
const iv = Buffer.from('FnJL7EDzjqWjcaY9', 'utf8');
const alg = 'aes-128-cbc' // 加密算法
function encode (id, date) {
  // 加密
  const encoder = crypto.createCipheriv(alg, key, iv) // 创建加密器
  const str = [id, date].join('|') // 创建加密字符串
  let encryted = encoder.update(str, 'utf8', 'hex') //
  encryted += encoder.final('hex')
  return encryted
}

function decode (str) {
  // 解密
  const decoder = crypto.createDecipheriv(alg, key, iv)
  let decoded = decoder.update(str, 'hex', 'utf8')
  decoded += decoder.final('utf8')
  const arr = decoded.split('|')
  return {
    id: arr[0],
    timespan: parseInt(arr[1])
  }
}

module.exports = {
  encode,
  decode
}