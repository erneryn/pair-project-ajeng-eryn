const express = require('express')
const router = express.Router()

const ControllerUser = require('../controller/controllerUser')

router.get('/login', ControllerUser.loginform)
router.post('/login', ControllerUser.login)


module.exports = router