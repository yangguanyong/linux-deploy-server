'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rule = sequelize.define('Rule', {
    name: DataTypes.STRING,
    level: DataTypes.INTEGER
  }, {});
  Rule.associate = function(models) {
    // associations can be defined here
  };
  return Rule;
};