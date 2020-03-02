const {model, Schema} = require('mongoose')

const requestSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    pet: {
        type: Schema.Types.ObjectId,
        ref: 'Pet'
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'denied'],
        default: 'pending'
    }
},
{
    timestamps: true,
    versionKey: false
})

module.exports = model('Request', requestSchema)