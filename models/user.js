'use strict';
module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
  const bcrypt = require('bcryptjs');
  const salt = bcrypt.genSaltSync(10);

  class User extends Model { }

  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Name cannot be empty" },
        notEmpty: { msg: "Name cannot be empty" }
      }
    },
    gender: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: { msg: "please input correct email, example@email.com" },
        notNull: { msg: "email cannot be empty" },
        notEmpty: { msg: "email cannot be empty" }
      }
    },
    age: DataTypes.INTEGER,
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate: (instance, options) => {
        const hash = bcrypt.hashSync(instance.password, salt);
        instance.password = hash
      }
    }
  })

  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Playlist)
  };
  return User;
};