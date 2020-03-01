const router = require('express').Router()
const cloudinary = require('../config/cloudinary')
const {RegisterPet, GetPets, GetPet, GetRandomPet} = require('../controllers/petsController')

router.post('/', cloudinary.single('photoURL'), RegisterPet)
.get('/', GetPets)
.get('/random', GetRandomPet)
.get('/:id', GetPet)


module.exports = router