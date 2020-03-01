const User = require('../models/User')
const Pets = require('../models/Pet')

exports.isAuth = (req, res, next) => req.isAuthenticated() 
                                        ? next() 
                                        : res.status(401).json({ msg: 'Log in first' })

exports.signup = (req, res) => {
    const { username, email, password } = req.body

    User.register( {username, email}, password)
        .then((user) => res.status(201).json({ user }))
        .catch((err) => res.status(500).json({ err }))
}

exports.login =  (req, res, next) => {
    const { user } = req
    Pets.find({user: user._id} ).then(pets_register => {
        user['pets_register'] = pets_register
        res.status(200).json({ user })
    })
}

exports.logout = (req, res, next) => {
    req.logout()
    res.status(200).json({ msg: 'Logged out' })
}

exports.getProfile = (req, res, next) => {
    User.findById(req.user._id).populate('pets_register')
      .then((user) => res.status(200).json({ user }))
      .catch((err) => res.status(500).json({ err }))
}

exports.uploadPhoto = async (req, res) => {
    const {_id} = req.user
    const {secure_url: photoURL} = req.file
    await User.update({_id}, {photoURL})
    res.status(201).json(req.file)
}