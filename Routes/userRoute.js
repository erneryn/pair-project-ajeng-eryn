const express = require('express')
const router = express.Router()

const ControllerUser = require('../controller/controllerUser')
const isLogin = require('../helper/isLogin')

router.get('/login', ControllerUser.loginform)
router.post('/login', ControllerUser.login)

router.use('/login', isLogin)



module.exports = router