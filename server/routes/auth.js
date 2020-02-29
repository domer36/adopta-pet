const router = require('express').Router()
const passport = require('../config/passport')
const { signup, login, logout, getProfile, isAuth } = require('../controllers/authController')

router.post('/signup', signup)
.post('/login', passport.authenticate('local'), login)
.get('/logout', logout)
.get('/profile', isAuth, getProfile)
.get('/isLogged', isAuth, (req, res)=>{
  return res.status(200).json({isLogged: true})
})

module.exports = router;