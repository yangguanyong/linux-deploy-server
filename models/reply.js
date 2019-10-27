'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reply = sequelize.define('Reply', {
    USER_ID: DataTypes.INTEGER,
    CONTENT: DataTypes.STRING,
    QUOTE_ID: DataTypes.INTEGER,
    DATE: DataTypes.DATE,
    STATUS: DataTypes.INTEGER,
    LIGHT_UP_COUNT: DataTypes.INTEGER
  }, {});
  Reply.associate = function(models) {
    // associations can be defined here
  };
  return Reply;
};