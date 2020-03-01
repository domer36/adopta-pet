const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    email: String,
    username: String,
    photoURL: {
      type: String,
      default: process.env.DEFAULT_PHOTO
    },
    pets_register: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Pet'
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
