'use strict'

const User = require('../models').User

class ControllerUser {
  static home(req, res) {
    res.render('home')
  }

  static loginform(req, res) {
    res.render('loginpage')
  }

  static login(req, res) {
    let data = {
      username: req.body.username,
      password: req.body.password
    }
    console.log(data)
    User
      .findOne({
        where: {
          username: data.username,
          password: data.password
        }
      })
      .then(result => {
        if (result == null) {
          throw err
        } else {
          res.redirect('/home')
        }
      })
      .catch(err => {
        res.render('loginpage')
      })
  }

  static formadduser(req, res) {
    res.render('addUser', { data: {}, errors: [] })
  }

  static adduser(req, res) {
    let dataUser = {
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      gender: req.body.gender,
      age: req.body.age,
      email: req.body.email
    }
    User
      .create(dataUser)
      .then(result => {
        res.redirect('/home')
      })
      .catch(err => {
        let errors = err.errors
        let data = dataUser
        res.render('addUser', { errors, data })
      })
  }




}
module.exports = ControllerUser