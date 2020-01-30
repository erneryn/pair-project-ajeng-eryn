'use strict';
module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class UserPlaylist extends Model { }

  UserPlaylist.init({
    PlaylistId: DataTypes.INTEGER,
    SongId: DataTypes.INTEGER
  }, { sequelize })

  UserPlaylist.associate = function (models) {
    // associations can be defined here
  };
  return UserPlaylist;
};