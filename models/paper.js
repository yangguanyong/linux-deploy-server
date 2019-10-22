'use strict';
module.exports = (sequelize, DataTypes) => {
  const Paper = sequelize.define('Paper', {
    title: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});
  Paper.associate = function(models) {
    // associations can be defined here
  };
  return Paper;
};