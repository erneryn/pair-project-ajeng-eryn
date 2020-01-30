const express = require('express')
const router = express.Router()
const isLogin = require('../helper/isLogin')

const ControllerPlaylist = require('../controller/controllerPlaylist')


router.get('/', ControllerPlaylist.showPlaylist)

router.use('/', isLogin)

router.get('/edit/:id', ControllerPlaylist.editPlaylistForm)
router.post('/edit/:id', ControllerPlaylist.editPlaylist)
router.get('/edit/delete/:id', ControllerPlaylist.deleteSong)

router.get('/delete/:id', ControllerPlaylist.deletePlaylist)

router.get('/:id/myPlaylist', ControllerPlaylist.showMyPlaylist)


router.get('/:id/addPlaylist', ControllerPlaylist.formNewPlaylist)
router.post('/:id/addPlaylist', ControllerPlaylist.addNewPlaylist)

router.get('/addSong/:id', ControllerPlaylist.addSongForm)
router.post('/addSong/:id', ControllerPlaylist.addSongPlaylist)

router.get('/star/:id',ControllerPlaylist.addStar)



module.exports = router