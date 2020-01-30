const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const homeRouter = require('./Routes/homeRoute')
const userRouter = require('./Routes/userRoute')
const playlistRouter = require('./Routes/playlistRoute')
const session = require('express-session')

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.use('/', homeRouter)

app.use('/user', userRouter)
app.use('/playlist', playlistRouter)

app.listen(port, () => console.log(`Server listening on port ${port}!`))