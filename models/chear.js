'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chear = sequelize.define('Chear', {
    title: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});
  Chear.associate = function(models) {
    // associations can be defined here
  };
  return Chear;
};