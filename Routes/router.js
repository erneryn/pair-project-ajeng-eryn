const express = require('express')
const router = express.Router()
const ControllerUser = require('../controller/controllerUser')

router.get('/home', function (req, res) {
  res.render('home')
})

router.get('/adduser', function (req, res) {
  ControllerUser.formadduser(req,res)
})

router.post('/adduser', function (req, res) {
 ControllerUser.adduser(req,res)
})

module.exports = router