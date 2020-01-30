const express = require('express')
const router = express.Router()

const ControllerPlaylist = require('../controller/controllerPlaylist')
const ControllerUser = require('../controller/controllerUser')

router.get('/home', function (req, res) {
  res.render('home')
})


router.get('/playlist', ControllerPlaylist.showPlaylist)

router.get('/playlist/edit/:id', ControllerPlaylist.editPlaylist)
router.get('/playlist/edit/delete/:id', ControllerPlaylist.deleteSong)

router.get('/playlist/delete/:id', ControllerPlaylist.deletePlaylist)

router.get('/:id/myPlaylist', ControllerPlaylist.showMyPlaylist)

router.get('/adduser', function (req, res) {
  ControllerUser.formadduser(req,res)
})

router.post('/adduser', function (req, res) {
 ControllerUser.adduser(req,res)
})


module.exports = router