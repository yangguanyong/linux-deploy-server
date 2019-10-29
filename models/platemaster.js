'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlateMaster = sequelize.define('PlateMaster', {
    userId: DataTypes.INTEGER,
    plateId: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {});
  PlateMaster.associate = function(models) {
    // associations can be defined here
  };
  return PlateMaster;
};