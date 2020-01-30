const express = require('express')
const router = express.Router()

const ControllerPlaylist = require('../controller/controllerPlaylist')
const ControllerUser = require('../controller/controllerUser')


router.get('/home', function (req, res) {
  res.render('home')
})



router.get('/login',ControllerUser.loginform)
router.get('/adduser', ControllerUser.formadduser )
router.post('/adduser', ControllerUser.adduser)

router.get('/playlist', ControllerPlaylist.showPlaylist)

router.get('/playlist/edit/:id', ControllerPlaylist.editPlaylist)
router.get('/playlist/edit/delete/:id', ControllerPlaylist.deleteSong)

router.get('/playlist/delete/:id', ControllerPlaylist.deletePlaylist)

router.get('/:id/myPlaylist', ControllerPlaylist.showMyPlaylist)

router.get('/:id/addNewPlayist', ControllerPlaylist.formNewPlaylist)
router.post('/:id/addNewPlayist', ControllerPlaylist.addNewPlaylist)

router.get('/:id/addSongToPlaylist', ControllerPlaylist.addSongForm)
router.post('/:id/addSongToPlaylist', ControllerPlaylist.addSongPlaylist)






module.exports = router