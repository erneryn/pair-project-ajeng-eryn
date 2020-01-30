'use strict';
module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class User extends Model { }

  User.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER
  })

  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Playlist)
  };
  return User;
};