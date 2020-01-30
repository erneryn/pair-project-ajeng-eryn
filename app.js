const express = require('express')
const app = express()
const port = 3000
const router = require('./Routes/router')
const session = require('express-session')

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

// app.use(function (req, res, next) {
//   if (req.session.user) {
//     next()
//   } else {
//     res.redirect('/login')
//   }
// })


app.use('/', router)

app.listen(port, () => console.log(`Server listening on port ${port}!`))