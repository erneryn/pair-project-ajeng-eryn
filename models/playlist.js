'use strict';
module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Playlist extends Model { }
  Playlist.init({
    name: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, { sequelize })

  Playlist.associate = function (models) {
    // associations can be defined here
    Playlist.belongsTo(models.User)
    Playlist.belongsToMany(models.Song, { through: models.UserPlaylist })
  };
  return Playlist;
};