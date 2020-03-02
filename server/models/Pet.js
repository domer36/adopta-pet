const {model, Schema} = require('mongoose')

const PetSchema = new Schema({
        name: String,
        image: String,
        age: String,
        breed: String,
        tags: [String],
        description: String,
        details: { 
            vacunado: Boolean, 
            desparacitado: Boolean, 
            esterilizado: Boolean 
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        requester: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Request'
            }
        ]
})

module.exports = model('Pet', PetSchema)