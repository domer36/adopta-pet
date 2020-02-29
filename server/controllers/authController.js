const User = require('../models/User')

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
    res.status(200).json({ user })
}

exports.logout = (req, res, next) => {
    req.logout()
    res.status(200).json({ msg: 'Logged out' })
}

exports.getProfile = (req, res, next) => {
    User.findById(req.user._id)
      .then((user) => res.status(200).json({ user }))
      .catch((err) => res.status(500).json({ err }))
}