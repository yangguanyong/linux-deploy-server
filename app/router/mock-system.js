var Router = require('koa-router')
var router = new Router();

router.get('/api/system/getUserList', async (ctx, next) => {
  ctx.body = {
    code: 200,
    message: '成功',
    response: [
      {
        name: '用户1',
        id: 1,
        type: 0 // 类型
      },
      {
        name: '用户2',
        id: 2,
        type: 1
      }
    ]
  }
})

router.post('/api/system/changeType', async (ctx, next) => {
  ctx.body = {
    code: 200,
    message: '成功',
    response: 'success'
  }
})

router.get('/api/system/getPhotoList', async (ctx, next) => {
  ctx.body = {
    code: 200,
    message: '成功',
    response: [
      {
        name: '照片1',
        id: 1,
        examineType: 0, // 0:未审核，1：审核通过，2：审核不通过
        url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2331005001,889005680&fm=26&gp=0.jpg',
        date: '2018年06月06日',
        desc: '这张照片很好看啊'
      },
      {
        name: '照片2',
        id: 2,
        examineType: 1,
        url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2331005001,889005680&fm=26&gp=0.jpg',
        date: '2018年06月06日',
        desc: '这张照片很好看啊'
      }
    ]
  }
})

router.post('/api/system/changePhotoType', async (ctx, next) => {
  ctx.body = {
    code: 200,
    message: '成功',
    response: 'success'
  }
})

module.exports = router