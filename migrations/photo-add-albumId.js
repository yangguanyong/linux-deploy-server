'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Photo', 'albumId', {
      type: Sequelize.INTEGER
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Photo');
  }
};