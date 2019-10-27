'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rule = sequelize.define('Rule', {
    NAME: DataTypes.STRING,
    LEVEL: DataTypes.INTEGER
  }, {});
  Rule.associate = function(models) {
    // associations can be defined here
  };
  return Rule;
};