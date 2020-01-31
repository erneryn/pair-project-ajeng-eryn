const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const homeRouter = require('./Routes/homeRoute')
const playlistRouter = require('./Routes/playlistRoute')
const session = require('express-session')

app.use(express.static('public'))
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.use('/', homeRouter)

app.use('/playlist', playlistRouter)

app.listen(port, () => console.log(`Server listening on port ${port}!`))