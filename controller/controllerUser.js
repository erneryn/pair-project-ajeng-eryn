'use strict'

const User = require('../models').User
const nodemailer = require('nodemailer')
const bcrypt = require('bcryptjs');


class ControllerUser {
  static home(req, res) {
    let logIn = req.session.user
    res.render('home', { logIn })
  }

  static loginform(req, res) {
    let logIn = req.session.user
    res.render('loginpage', { logIn })
  }

  static login(req, res) {
    let data = {
      username: req.body.username,
      password: req.body.password
    }

    User
      .findOne({
        where:
          { username: data.username }
      })
      .then(result => {
        let success = `Hi ${result.username}!`
        if (result) {
          if (bcrypt.compareSync(data.password, result.dataValues.password)) {
            req.session.user = {
              username: result.username,
              id: result.id
            }
            req.app.locals.welcome = success
            res.redirect(`/home?success=${success}`)
          } else {
            throw err
          }
        } else {
          throw err
        }
      })
      .catch(err => {
        // res.send('err')
        let errors = 'e-mail or password is invalid!'
        res.render('loginpage', { errors, logIn: '' })
      })
  }

  static formadduser(req, res) {
    let logIn = req.session.user
    res.render('addUser', { data: {}, errors: [], logIn })
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

    const output = `<h1>Hello ${dataUser.name}!</h1>
    <h3> Welcome to Hits Music! </h3>
    <p>To login, use this information:</p>
    <p>username: ${dataUser.username}</p>
    <p>password: ${dataUser.password}</p>`

    User
      .create(dataUser)
      .then(result => {

        let transporter = nodemailer.createTransport({
          service: 'gmail',
          logger: true,
          debug: true,
          auth: {
            user: 'hitsmusickfc@gmail.com', // generated ethereal user
            pass: 'Hacktiv8'  // generated ethereal password
          }
        });

        let mailOptions = {
          from: '"Nodemailer Contact" <hitsmusickfc@gmail.com>', // sender address
          to: dataUser.email, // list of receivers
          subject: 'Welcome to HitsMusic!', // Subject line
          text: 'Welcome to HitsMusic!', // plain text body
          html: output // html body
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return console.log(error);
          }

          res.redirect('/login')
        });

      })
      .catch(err => {
        let errors = err.errors
        let data = dataUser
        let logIn = req.session.user
        res.render('addUser', { errors, data , logIn})
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