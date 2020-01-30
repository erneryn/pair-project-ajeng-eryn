'use strict'

const User = require('../models').User

class ControllerUser {
  static home(req, res) {
    let logIn = req.session.user
    console.log(logIn, '<<< ini login')

    res.render('home', { logIn })
  }

  static loginform(req, res) {
    res.render('loginpage')
  }

  static login(req, res) {
    let data = {
      username: req.body.username,
      password: req.body.password
    }

    User
      .findOne({
        where: {
          username: data.username
        }
      })
      .then(result => {
        let success = `Hi ${result.username}!`

        if (result.password == data.password) {
          req.session.user = {
            username: result.username,
            id: result.id
          }
          req.app.locals.welcome = success
          res.redirect(`/home?success=${success}`)
        }
      })
      .catch(err => {
        let error = 'e-mail or password is invalid!'
        res.render('loginpage', { error })
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

  static logout(req, res) {
    req.session.destroy(function (err) {
      if (err) {
        res.send(err)
      } else {
        res.redirect('/home')
      }
    })
  }

}
module.exports = ControllerUser