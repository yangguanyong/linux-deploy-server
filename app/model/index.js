/*
建立连接
*/ 
const Sequelize = require('sequelize');

const sequelize = new Sequelize('bbs', 'root', 'Ygy5583330', {
  host: 'localhost',
  dialect: 'mysql'
});

/**
 * 分发模型
 */

const Plate = require('../../models/plate')(sequelize, Sequelize);
const Platemaster = require('../../models/platemaster')(sequelize, Sequelize);
const Post = require('../../models/post')(sequelize, Sequelize);
const Posthistory = require('../../models/posthistory')(sequelize, Sequelize);
const Reply = require('../../models/reply')(sequelize, Sequelize);
const Rule = require('../../models/rule')(sequelize, Sequelize);
const User = require('../../models/user')(sequelize, Sequelize);

module.exports = {
  Plate,
  Platemaster,
  Post,
  Posthistory,
  Reply,
  Rule,
  User
}

/*
定义模型（表）
*/
// const Model = Sequelize.Model;
// class User extends Model {
// }
// User.init({
//   // 属性
//   firstName: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: Sequelize.STRING
//     // allowNull 默认为 true
//   }
// }, {
//   sequelize,
//   modelName: 'User', // 表名称为users,表名自动复数
//   freezeTableName: false // 表名是否取消复数
//   // 参数
// })

// module.exports = User;

/*
增删改查
*/

/* -----demo-----
User.findAll().then(users => {
  console.log("All users:", JSON.stringify(users, null, 4));
})
// 创建新用户
User.create({ firstName: "Jane", lastName: "Doe" }).then(jane => {
  console.log("Jane's auto-generated ID:", jane.id);
});
// 删除所有名为“Jane”的人
User.destroy({
  where: {
    firstName: "Jane"
  }
}).then(() => {
  console.log("Done");
});

// 将所有没有姓氏的人改为“Doe”
User.update({ lastName: "Doe" }, {
  where: {
    lastName: null
  }
}).then(() => {
  console.log("Done");
});
*/




