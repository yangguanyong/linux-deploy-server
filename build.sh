git pull
yarn
npx sequelize-cli db:migrate --env production
pm2 restart ecosystem.config.js --env production