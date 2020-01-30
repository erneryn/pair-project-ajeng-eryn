const express = require('express')
const router = express.Router()

const ControllerUser = require('../controller/controllerUser')

router.get('/home', ControllerUser.home)

router.get('/login', ControllerUser.loginform)
router.post('/login', ControllerUser.login)

router.get('/adduser', ControllerUser.formadduser)
router.post('/adduser', ControllerUser.adduser)



module.exports = router