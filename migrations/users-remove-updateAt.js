'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'updatedAt');
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};