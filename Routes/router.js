const express = require('express')
const router = express.Router()
const ControllerPlaylist = require('../controller/controllerPlaylist')

router.get('/', function (req, res) {
  res.send('home page')
})

router.get('/playlist', ControllerPlaylist.showPlaylist)

router.get('/playlist/edit/:id', ControllerPlaylist.editPlaylist)
router.get('/playlist/edit/delete/:id', ControllerPlaylist.deleteSong)

router.get('/playlist/delete/:id', ControllerPlaylist.deletePlaylist)

router.get('/:id/myPlaylist', ControllerPlaylist.showMyPlaylist)

module.exports = router