'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    name: DataTypes.STRING,
    photoCount: DataTypes.INTEGER,
    cover: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    timestamps: false,
    freezeTableName: true // 复数变单数，不加这个参数的话查询时表名会默认变成复数
  });
  Album.associate = function(models) {
    // associations can be defined here
  };
  return Album;
};