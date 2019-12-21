'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn('Photo', 'url', {
          type: Sequelize.STRING(1000)
        })
      ])
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Photo');
  }
};