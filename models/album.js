'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    name: DataTypes.STRING,
    photoCount: DataTypes.INTEGER,
    cover: DataTypes.STRING
  }, {
    timestamps: false
  });
  Album.associate = function(models) {
    // associations can be defined here
  };
  return Album;
};