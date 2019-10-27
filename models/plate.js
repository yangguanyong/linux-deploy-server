'use strict';
module.exports = (sequelize, DataTypes) => {
  const Plate = sequelize.define('Plate', {
    NAME: DataTypes.STRING
  }, {});
  Plate.associate = function(models) {
    // associations can be defined here
  };
  return Plate;
};