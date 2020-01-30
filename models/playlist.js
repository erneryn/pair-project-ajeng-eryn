'use strict';
module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class Playlist extends Model { }
  Playlist.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Playlist Name cannot be empty" },
        notEmpty: { msg: "Playlist Name cannot be empty" }
      }
    },
    UserId: DataTypes.INTEGER
  }, { sequelize })

  Playlist.associate = function (models) {
    // associations can be defined here
    Playlist.belongsTo(models.User)
    Playlist.belongsToMany(models.Song, { through: models.SongPlaylist })
  };
  return Playlist;
};