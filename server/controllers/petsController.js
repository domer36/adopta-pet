const User = require('../models/User')
const Pet = require('../models/Pet')
const Request = require('../models/Request')

exports.RegisterPet = async (req, res) => {
    const {secure_url: image} = req.file
    const info =  JSON.parse( req.body.info ) 
    const {_id: userId} = req.user
    const newPet = {
        ...info,
        image,
        user: userId
    }

    const pet = await Pet.create( newPet ).catch( () => res.status(500).send('Error to register a pet'))
    await User.update({_id: userId}, {$push: {pets_register: pet._id}}).catch( ()=> res.status(500).send('Error to push pet into user.'))
    return res.status(201).json(pet)
}

exports.GetPets = async (req, res) => {
    const pets = await Pet.find({user: {$ne: req.user._id}},{_id:1, name: 1, image: 1})
    res.status(200).json({pets})
}

exports.GetPet = async (req, res) => {
    const {id} = req.params
    const pet = await Pet.findOne({_id: id}).populate({
        path: 'requester',
        populate: {
            path: 'user'
        }
    })
    res.status(200).json({pet})
}

exports.GetRandomPet =  async (req, res) => {
    const pets = await Pet.find({user: {$ne: req.user._id}})
    const random = Math.floor( Math.random() * pets.length )
    res.status(200).json( {pet: pets[random]} )
}

exports.PutRequest = async (req, res) => {
    const {id} = req.params
    const {_id: requester} = req.user

    const foundRequest = await Request.find({$and: [{user: requester}, {pet: id}]})
    
    if(!foundRequest.length) {
        Request.create({user: requester, pet: id}).then( async request => {
            await Pet.updateOne({_id:id}, {$addToSet: {requester: request._id}})
            await User.updateOne({_id: requester}, {$addToSet: {pets_requested: request._id}})
            
            return res.status(201).json({request})
        }).catch(err => console.log('error', err))
    }

}