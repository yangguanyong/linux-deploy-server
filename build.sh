git pull
yarn
npx sequelize-cli db:migrate --env --production
pm2 start app.js --env production