'use strict';
module.exports = (sequelize, DataTypes) => {
  const POST = sequelize.define('POST', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    plateId: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    replyCount: DataTypes.INTEGER,
    readCount: DataTypes.INTEGER
  }, {});
  POST.associate = function(models) {
    // associations can be defined here
  };
  return POST;
};