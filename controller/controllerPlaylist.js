const { User, Song, Playlist, UserPlaylist } = require('../models')

class ControllerPlaylist {
  static showPlaylist(req, res) {
    Playlist
      .findAll({
        include: [Song, User]
      })
      .then(lists => {
        // res.send(lists)
        res.render('showPlaylist', { lists })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static showMyPlaylist(req, res) {
    let user = {
      id: req.params.id
    }
    Playlist
      .findAll({
        where: {
          UserId: user.id
        },
        include: Song
      })
      .then(lists => {
        res.render('showMyPlaylist', { lists })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static editPlaylist(req, res) {
    let playlist = {
      id: req.params.id
    }
    Playlist
      .findByPk(playlist.id, {
        include: [Song]
      })
      .then(playlists => {
        // res.send(playlists)
        res.render('editPlaylist', { playlists })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static deleteSong(req, res) {
    let song = {
      id: req.params.id
    }
    let playlist = {}

    UserPlaylist
      .findOne({
        where: {
          SongId: song.id
        }
      })
      .then(list => {
        playlist.id = list.PlaylistId
        return UserPlaylist
          .destroy({
            where: {
              SongId: song.id
            }
          })
      })
      .then(song => {
        res.redirect(`/playlist/edit/${playlist.id}`)
      })
      .catch(err => {
        res.send(err)
      })
  }

  static deletePlaylist(req, res) {
    let playlist = {
      id: req.params.id
    }

    let user = {}

    Playlist
      .findOne({
        where: {
          id: playlist.id
        }
      })
      .then(data => {
        user.id = data.UserId
        return Playlist
          .destroy({
            where: {
              id: playlist.id
            }
          })
      })
      .then(() => {
        return UserPlaylist
          .destroy({
            where: {
              PlaylistId: playlist.id
            }
          })
      })
      .then(() => {
        res.redirect(`/${user.id}/myPlaylist`)
      })
      .catch(err => {
        res.send(err)
      })
  }
}

module.exports = ControllerPlaylist