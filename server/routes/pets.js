const router = require('express').Router()

router.get('/', (req, res) => {
    
    res.status(200).json({
        pets: [
           
        ]
    })
})
.get('/:id', (req, res) => {
    const {id} = req.params
    res.status(200).json({
        _id: 'lucho3jksdjfkdsjfj',
        name: 'lucho3',
        image: 'http://localhost:3000/images/pet3.jpg'
    })
})

module.exports = router