'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Replies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      USER_ID: {
        type: Sequelize.INTEGER
      },
      CONTENT: {
        type: Sequelize.STRING
      },
      QUOTE_ID: {
        type: Sequelize.INTEGER
      },
      DATE: {
        type: Sequelize.DATE
      },
      STATUS: {
        type: Sequelize.INTEGER
      },
      LIGHT_UP_COUNT: {
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
    return queryInterface.dropTable('Replies');
  }
};