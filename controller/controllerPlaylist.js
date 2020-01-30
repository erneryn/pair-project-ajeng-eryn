const { User, Song, Playlist, SongPlaylist } = require('../models')

class ControllerPlaylist {
  static showPlaylist(req, res) {
    Playlist
      .findAll({
        include: [Song, User]
      })
      .then(lists => {
        // res.send(lists)
        let logIn = req.session.user
        res.render('showPlaylist', { lists, logIn })
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
        let logIn = req.session.user
        res.render('showMyPlaylist', { lists, logIn })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static editPlaylistForm(req, res) {
    let playlist = {
      id: req.params.id
    }
    Playlist
      .findByPk(playlist.id, {
        include: [Song]
      })
      .then(playlists => {
        // res.send(playlists)
        let logIn = req.session.user
        res.render('editPlaylist', { playlists, logIn })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static editPlaylist(req, res) {
    let playlist = {
      id: req.params.id
    }

    let user = {}

    Playlist
      .findByPk(playlist.id)
      .then(list => {
        user.id = list.UserId
        return Playlist
          .update({
            name: req.body.name
          }, {
            where: {
              id: playlist.id
            }
          })
      })
      .then((result) => {
        // res.send(result)
        res.redirect(`/playlist/${user.id}/myPlaylist`)
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

    SongPlaylist
      .findOne({
        where: {
          SongId: song.id
        }
      })
      .then(list => {
        playlist.id = list.PlaylistId
        return SongPlaylist
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
        return SongPlaylist
          .destroy({
            where: {
              PlaylistId: playlist.id
            }
          })
      })
      .then(() => {
        res.redirect(`/playlist/${user.id}/myPlaylist`)
      })
      .catch(err => {
        res.send(err)
      })
  }

  static formNewPlaylist(req, res) {
    let logIn = req.session.user
    res.render('addnewplaylist', { errors: [], logIn })
  }

  static addNewPlaylist(req, res) {
    let data = {
      name: req.body.name,
      UserId: req.params.id
    }

    Playlist
      .create(data)
      .then((playlist) => {
        res.redirect(`/playlist/addSong/${playlist.id}`)
      })
      .catch(err => {
        res.send(err)
        // res.render('addnewplaylist', { errors: err.errors })
      })
  }

  static addSongForm(req, res) {
    let logIn = req.session.user.id

    console.log(logIn, '< ini loh')

    Song
      .findAll()
      .then(result => {
        res.render('addsongplaylist', { result, logIn })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static addSongPlaylist(req, res) {
    let detail = {
      PlaylistId: req.params.id,
      SongId: req.body.id
    }
    SongPlaylist
      .create(detail)
      .then(() => {
        res.redirect(`/playlist/addSong/${detail.PlaylistId}`)
      })
      .catch(err => {
        res.send(err)
      })
  }
}

module.exports = ControllerPlaylist