const express = require('express')
const router = express.Router()

const ControllerPlaylist = require('../controller/controllerPlaylist')


router.get('/', ControllerPlaylist.showPlaylist)

router.get('/edit/:id', ControllerPlaylist.editPlaylist)
router.get('/edit/delete/:id', ControllerPlaylist.deleteSong)

router.get('/delete/:id', ControllerPlaylist.deletePlaylist)

router.get('/:id/myPlaylist', ControllerPlaylist.showMyPlaylist)


router.get('/:id/addPlaylist', ControllerPlaylist.formNewPlaylist)



module.exports = router