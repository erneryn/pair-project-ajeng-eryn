const express = require('express')
const app = express()
const port = 3000
const router = require('./Routes/router')

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.use('/', router)

app.listen(port, () => console.log(`Server listening on port ${port}!`))