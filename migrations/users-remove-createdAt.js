'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'createdAt');
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};