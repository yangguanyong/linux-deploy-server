'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Photo', 'userId', {
      type: Sequelize.INTEGER
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Photo');
  }
};