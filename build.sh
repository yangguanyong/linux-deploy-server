cd /opt/code/first-demo/linux-deploy-server
git clone git@github.com:yangguanyong/linux-deploy-server.git
git pull
yarn
npx sequelize-cli db:migrate --env production
pm2 restart ecosystem.config.js --env production