const router = require('express').Router()

router.get('/', (req, res) => {
    
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
.get('/:id', (req, res) => {
    const {id} = req.params
    res.status(200).json({pet: {
        _id: 'lucho3jksdjfkdsjfj',
        name: 'lucho3',
        image: 'http://localhost:3000/images/pet3.jpg',
        age: '2 años',
        tags: ['sociable', 'departamento', 'peque', 'amigable', 'jugueton'],
        description: "Mi nombre es lucho, soy muy amigable me gusta jugar con la pelota y correr."
    }})
})

module.exports = router