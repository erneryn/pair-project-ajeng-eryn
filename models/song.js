'use strict';
module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Song extends Model { }

  Song.init({
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    artist: DataTypes.STRING
  }, { sequelize })

  Song.associate = function (models) {
    // associations can be defined here
    Song.belongsToMany(models.Playlist, { through: models.SongPlaylist })
  };
  return Song;
};