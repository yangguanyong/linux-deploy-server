'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlateMaster = sequelize.define('PlateMaster', {
    USER_ID: DataTypes.INTEGER,
    PLATE_ID: DataTypes.INTEGER,
    DATE: DataTypes.DATE
  }, {});
  PlateMaster.associate = function(models) {
    // associations can be defined here
  };
  return PlateMaster;
};