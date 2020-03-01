const router = require('express').Router()
const cloudinary = require('../config/cloudinary')
const Pet = require('../models/Pet')
const User = require('../models/User')
const {isAuth} = require('../controllers/authController')

router.post('/', isAuth, cloudinary.single('photoURL'), async (req, res) => {
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
})
.get('/', (req, res) => {
    
    res.status(200).json({
        pets: [
            {
                _id: 'luchojksdjfkdsjfj',
                name: 'lucho',
                image: 'http://localhost:3000/images/pet1.jpg'
            },
            {
                _id: 'lucho2jksdjfkdsjfj',
                name: 'lucho2',
                image: 'http://localhost:3000/images/pet2.jpg'
            },
            {
                _id: 'lucho3jksdjfkdsht65jfj',
                name: 'lucho3',
                image: 'http://localhost:3000/images/pet3.jpg'
            },
            {
                _id: 'lucho4jksdjfkds456jhgjfj',
                name: 'lucho4',
                image: 'http://localhost:3000/images/pet4.jpg'
            },
            {
                _id: 'luchojksdjfkdsjffghgfhfj',
                name: 'lucho',
                image: 'http://localhost:3000/images/pet1.jpg'
            },
            {
                _id: 'lucho2jksdjfkdsjfghbbfefj',
                name: 'lucho2',
                image: 'http://localhost:3000/images/pet2.jpg'
            },
            {
                _id: 'lucho3jksdjfkdsjxcxvdrffj',
                name: 'lucho3',
                image: 'http://localhost:3000/images/pet3.jpg'
            },
            {
                _id: 'lucho4jksdjfkdsjkhnbnbnbvjfj',
                name: 'lucho4',
                image: 'http://localhost:3000/images/pet4.jpg'
            },
            {
                _id: 'luchojksdjfkdjkhjkjhkhjsjfj',
                name: 'lucho',
                image: 'http://localhost:3000/images/pet1.jpg'
            },
            {
                _id: 'lucho2jksdjfsdfsdfsdfskdsjfj',
                name: 'lucho2',
                image: 'http://localhost:3000/images/pet2.jpg'
            },
            {
                _id: 'lucho3jksdjfsdfsdfsdfskdsjfj',
                name: 'lucho3',
                image: 'http://localhost:3000/images/pet3.jpg'
            },
            {
                _id: 'lucho4sdfsdfsjksdjfkdsjfj',
                name: 'lucho4',
                image: 'http://localhost:3000/images/pet4.jpg'
            },
            {
                _id: 'luchojksdjfkedfsdfdsfsddsjfj',
                name: 'lucho',
                image: 'http://localhost:3000/images/pet1.jpg'
            },
            {
                _id: 'lucho2jksdjfkdsjfj',
                name: 'lucho2',
                image: 'http://localhost:3000/images/pet2.jpg'
            },
            {
                _id: 'lucho3jksdjfkdsjfj',
                name: 'lucho3',
                image: 'http://localhost:3000/images/pet3.jpg'
            },
            {
                _id: 'lucho4jksdjfkdsjfj',
                name: 'lucho4',
                image: 'http://localhost:3000/images/pet4.jpg'
            }
        ]
    })
})
.get('/random', (req, res) => {

    const pets = [
        {
            _id: 'luchojksdjfkdsjfj',
            name: 'lucho',
            image: 'http://localhost:3000/images/pet1.jpg'
        },
        {
            _id: 'lucho2jksdjfkdsjfj',
            name: 'lucho2',
            image: 'http://localhost:3000/images/pet2.jpg'
        },
        {
            _id: 'lucho3jksdjfkdsht65jfj',
            name: 'lucho3',
            image: 'http://localhost:3000/images/pet3.jpg'
        }
    ]
    const random = Math.floor( Math.random() * pets.length )
    console.log('random', random);
    
    res.status(200).json( {pet: pets[random]} )
})
.get('/:id', (req, res) => {
    const {id} = req.params
    res.status(200).json({pet: {
        _id: 'lucho3jksdjfkdsjfj',
        name: 'lucho3',
        image: 'http://localhost:3000/images/pet3.jpg',
        age: '2 años',
        breed: 'pug',
        tags: ['sociable', 'departamento', 'peque', 'amigable', 'jugueton'],
        description: "Mi nombre es lucho, soy muy amigable me gusta jugar con la pelota y correr.",
        details: {
            vacunado: true,
            desparacitado: false,
            esterilizado: true
        }
    }})
})


module.exports = router