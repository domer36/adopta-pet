const router = require('express').Router()
const passport = require('../config/passport')
const cloudinary = require('../config/cloudinary')
const { signup, login, logout, getProfile, isAuth, uploadPhoto } = require('../controllers/authController')

router.post('/signup', signup)

.post('/login', passport.authenticate('local'), login)

.post('/upload_photo', cloudinary.single('photoURL'), uploadPhoto)

.get('/logout', logout)

.get('/profile', isAuth, getProfile)

.get('/isLogged', isAuth, (req, res)=> res.status(200).json({isLogged: true}))

module.exports = router;