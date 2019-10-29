'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reply = sequelize.define('Reply', {
    userId: DataTypes.INTEGER,
    content: DataTypes.STRING,
    quoteId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    status: DataTypes.INTEGER,
    lightUpCount: DataTypes.INTEGER
  }, {});
  Reply.associate = function(models) {
    // associations can be defined here
  };
  return Reply;
};