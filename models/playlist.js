'use strict';

module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
  const user = sequelize.models

  class Playlist extends Model { }
  Playlist.init({
    name:DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, { 
    
      hooks:{
      beforeCreate : (instance, options) =>{
        console.log(instance)

      }
    },
    sequelize })

  Playlist.associate = function (models) {
    // associations can be defined here
    Playlist.belongsTo(models.User)
    Playlist.belongsToMany(models.Song, { through: models.SongPlaylist })
  };
  return Playlist;
};