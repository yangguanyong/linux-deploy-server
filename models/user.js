'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    type: DataTypes.INTEGER,
    albums: DataTypes.INTEGER,
    photos: DataTypes.INTEGER,
    account: DataTypes.STRING,
    password: DataTypes.STRING,
    lastLogin: DataTypes.STRING
  }, {
    timestamps: false
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};