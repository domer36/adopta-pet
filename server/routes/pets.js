const router = require('express').Router()
const cloudinary = require('../config/cloudinary')
const {RegisterPet, GetPets, GetPet, GetRandomPet, PutRequest} = require('../controllers/petsController')

router.post('/', cloudinary.single('photoURL'), RegisterPet)
.get('/', GetPets)
.get('/random', GetRandomPet)
.get('/:id', GetPet)
.put('/request/:id', PutRequest)


module.exports = router