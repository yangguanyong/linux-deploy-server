const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = '接口数据';
  }
}
// 
module.exports = HomeController;