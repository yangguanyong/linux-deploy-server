'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PostHistories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      POST_ID: {
        type: Sequelize.INTEGER
      },
      MASTER_ID: {
        type: Sequelize.INTEGER
      },
      STATUS: {
        type: Sequelize.INTEGER
      },
      CAUSE: {
        type: Sequelize.STRING
      },
      REMARK: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PostHistories');
  }
};