'use strict';
module.exports = (sequelize, DataTypes) => {
  const PostHistory = sequelize.define('PostHistory', {
    POST_ID: DataTypes.INTEGER,
    MASTER_ID: DataTypes.INTEGER,
    STATUS: DataTypes.INTEGER,
    CAUSE: DataTypes.STRING,
    REMARK: DataTypes.STRING
  }, {});
  PostHistory.associate = function(models) {
    // associations can be defined here
  };
  return PostHistory;
};