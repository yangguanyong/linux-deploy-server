'use strict';
module.exports = (sequelize, DataTypes) => {
  const POST = sequelize.define('POST', {
    TITLE: DataTypes.STRING,
    CONTENT: DataTypes.STRING,
    USER_ID: DataTypes.INTEGER,
    DATE: DataTypes.DATE,
    PLATE_ID: DataTypes.INTEGER,
    STATUS: DataTypes.INTEGER,
    REPLY_COUNT: DataTypes.INTEGER,
    READ_COUNT: DataTypes.INTEGER
  }, {});
  POST.associate = function(models) {
    // associations can be defined here
  };
  return POST;
};