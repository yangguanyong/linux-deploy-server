var Router = require('koa-router');
var router = new Router();

router.get('/api/mock/album/getList', async (ctx, next) => {
  ctx.body = {
    code: 200,
    message: '成功',
    response: [
      {
        id: 1,
        name: "相册1",
        photoCount: 10
      },
      {
        id: 2,
        name: "相册2",
        photoCount: 5
      }
    ]
  }
})

router.post('/api/mock/album/add', async (ctx, next) => {
  ctx.body = {
    code: 200,
    message: '成功',
    response: 1111
  }
})

router.get('/api/mock/album/getDetail', async (ctx, next) => {
  ctx.body = {
    code: 200,
    message: '成功',
    response: {
      id: 11,
      name: '相册1',
      photoCount: 15,
      cover: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2331005001,889005680&fm=26&gp=0.jpg',
      photoList: [
        {
          id: 1,
          date: '2018年06月06日',
          url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2331005001,889005680&fm=26&gp=0.jpg',
          desc: '这张照片很好看啊'
        },
        {
          id: 2,
          date: '2019年08月06日',
          url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2331005001,889005680&fm=26&gp=0.jpg',
          desc: '赞赞赞'
        }
      ]
    }
  }
})

router.post('/api/album/deleteAlbum', async (ctx, next) => {
  ctx.body = {
    code: 200,
    message: '成功',
    response: 111
  }
})

module.exports = router