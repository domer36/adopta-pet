const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    email: String,
    username: String,
    birth: String,
    photoURL: {
      type: String,
      default: process.env.DEFAULT_PHOTO
    },
    pets_register: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Pet'
      }
    ],
    pets_requested: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Request'
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);
