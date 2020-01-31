const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')


const ControllerUser = require('../controller/controllerUser')

router.get('/', ControllerUser.home)
router.get('/home', ControllerUser.home)

router.get('/login', ControllerUser.loginform)
router.post('/login', ControllerUser.login)

router.get('/adduser', ControllerUser.formadduser)
router.post('/adduser', ControllerUser.adduser)

router.get('/logout', ControllerUser.logout)


module.exports = router