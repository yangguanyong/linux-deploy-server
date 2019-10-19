const Koa = require('koa');
const app = new Koa();
var cors = require('koa-cors');
app.use(cors())

var Router = require('koa-router')
var router = new Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Ygy5583330',
  database : 'test'
})

connection.connect();

router.get('/search', function (ctx, next) {
  connection.query('SELECT * FROM test_tbl', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
  });
})

router.get('/insert', function (ctx, next) {
  connection.query('INSERT INTO test_tbl (title) values ("李少凡")', function (error, results, fields) {
    if (error) throw error;
    console.log('插入成功');
  })
})

app
.use(router.routes())
.use(router.allowedMethods());

app.listen(3000);