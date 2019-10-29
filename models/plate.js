'use strict';
module.exports = (sequelize, DataTypes) => {
  const Plate = sequelize.define('Plate', {
    name: DataTypes.STRING
  }, {});
  Plate.associate = function(models) {
    // associations can be defined here
  };
  return Plate;
};