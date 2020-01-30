module.exports = (req, res, next) => {
  if (req.session.user) {
    next()
  } else {
    let failed = 'You must log in first!'
    res.render('home', { failed })
    // res.redirect('/home')
  }
}