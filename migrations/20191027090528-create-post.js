'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('POSTs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TITLE: {
        type: Sequelize.STRING
      },
      CONTENT: {
        type: Sequelize.STRING
      },
      USER_ID: {
        type: Sequelize.INTEGER
      },
      DATE: {
        type: Sequelize.DATE
      },
      PLATE_ID: {
        type: Sequelize.INTEGER
      },
      STATUS: {
        type: Sequelize.INTEGER
      },
      REPLY_COUNT: {
        type: Sequelize.INTEGER
      },
      READ_COUNT: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('POSTs');
  }
};