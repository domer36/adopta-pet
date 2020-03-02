const User = require('../models/User')
const Pets = require('../models/Pet')
const Request = require('../models/Request')

exports.isAuth = (req, res, next) => req.isAuthenticated() 
                                        ? next() 
                                        : res.status(401).json({ msg: 'Log in first' })

exports.signup = (req, res) => {
    const { username, email, password } = req.body

    User.register( {username, email}, password)
        .then((user) => res.status(201).json({ user }))
        .catch((err) => res.status(500).json({ err }))
}

exports.login =  async (req, res, next) => {
    const { user } = req

    const cur_user = await User.findOne({_id: user._id}).populate({
        path: 'pets_requested',
        populate: {
            path: 'pet'
        }
    }).populate('pets_register')
    res.status(200).json({user: cur_user})
}

exports.logout = (req, res, next) => {
    req.logout()
    res.status(200).json({ msg: 'Logged out' })
}

exports.getProfile = async (req, res, next) => {
    await User.findById(req.user._id).populate('pets_register').populate('pets_requested')
      .then((user) => res.status(200).json({ user }))
      .catch((err) => res.status(500).json({ err }))
}

exports.uploadPhoto = async (req, res) => {
    const {_id} = req.user
    const {secure_url: photoURL} = req.file
    await User.update({_id}, {photoURL})
    res.status(201).json(req.file)
}