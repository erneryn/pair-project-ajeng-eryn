'use strict';

module.exports = (sequelize, DataTypes) => {

  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
 


  class Playlist extends Model { }
  Playlist.init({
    name:DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    stars: DataTypes.STRING
  }, { 
    
      hooks:{
      beforeCreate : (instance, options) =>{
        if(instance.name.length == 0){
          instance.name= "My New Playlist "+new Date().toDateString()
        }
        instance.stars=0
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