'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        name: '超级管理员',
        type: 0,
        albums: 0,
        photos: 0,
        account: 'admin',
        password: '123456x'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};