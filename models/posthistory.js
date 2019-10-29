'use strict';
module.exports = (sequelize, DataTypes) => {
  const PostHistory = sequelize.define('PostHistory', {
    postId: DataTypes.INTEGER,
    masterId: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    cause: DataTypes.STRING,
    remark: DataTypes.STRING
  }, {});
  PostHistory.associate = function(models) {
    // associations can be defined here
  };
  return PostHistory;
};