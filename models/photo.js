'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    date: DataTypes.STRING,
    url: DataTypes.STRING,
    desc: DataTypes.STRING,
    albumId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    timestamps: false,
    freezeTableName: true // 复数变单数，不加这个参数的话查询时表名会默认变成复数
  });
  Photo.associate = function(models) {
    // associations can be defined here
  };
  return Photo;
};