'use strict';
module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define('Report', {
    title: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});
  Report.associate = function(models) {
    // associations can be defined here
  };
  return Report;
};