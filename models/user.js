'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    NAME: DataTypes.STRING,
    PASSWORD: DataTypes.STRING,
    ACCOUNT: DataTypes.STRING,
    RULE_ID: DataTypes.INTEGER,
    HEAD_PIC: DataTypes.STRING,
    STATUS: DataTypes.INTEGER,
    REGISTER_TIME: DataTypes.DATE
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};