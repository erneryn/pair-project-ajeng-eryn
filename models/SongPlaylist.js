'use strict';
module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class SongPlaylist extends Model { }

  SongPlaylist.init({
    PlaylistId: DataTypes.INTEGER,
    SongId: DataTypes.INTEGER
  },{sequelize})

  SongPlaylist.associate = function (models) {
    // associations can be defined here
  };
  return SongPlaylist;
};