cd /opt/code/first-demo/linux-deploy-server
git clone git@github.com:yangguanyong/linux-deploy-server.git
git pull
yarn
npx sequelize-cli db:migrate --env production
pm2 restart ecosystem.config.js --env production

// User 用户表
$ npx sequelize-cli model:generate --name User --attributes NAME:string,PASSWORD:string,ACCOUNT:string,RULE_ID:integer,HEAD_PIC:string,STATUS:integer,REGISTER_TIME:date
// Rule 角色
$ npx sequelize-cli model:generate --name Rule --attributes NAME:string,LEVEL:integer
// Plate 版块
$ npx sequelize-cli model:generate --name Plate --attributes NAME:string
// PlateMaster 版主
$ npx sequelize-cli model:generate --name PlateMaster --attributes USER_ID:integer,PLATE_ID:integer,DATE:date
// PostHistory 帖子处理历史
$ npx sequelize-cli model:generate --name PostHistory --attributes POST_ID:integer,MASTER_ID:integer,STATUS:integer,CAUSE:string,REMARK:string
// POST 帖子
$ npx sequelize-cli model:generate --name POST --attributes TITLE:string,CONTENT:string,USER_ID:integer,DATE:date,PLATE_ID:integer,STATUS:integer,REPLY_COUNT:integer,READ_COUNT:integer
// Reply 恢复
$ npx sequelize-cli model:generate --name Reply --attributes USER_ID:integer,CONTENT:string,QUOTE_ID:integer,DATE:date,STATUS:integer,LIGHT_UP_COUNT:integer