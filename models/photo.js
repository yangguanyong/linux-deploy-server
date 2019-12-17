'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    date: DataTypes.STRING,
    url: DataTypes.STRING,
    desc: DataTypes.STRING
  }, {
    timestamps: false
  });
  Photo.associate = function(models) {
    // associations can be defined here
  };
  return Photo;
};