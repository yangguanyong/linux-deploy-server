'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    account: DataTypes.STRING,
    ruleId: DataTypes.INTEGER,
    headPic: DataTypes.STRING,
    status: DataTypes.INTEGER,
    registerTime: DataTypes.DATE
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};