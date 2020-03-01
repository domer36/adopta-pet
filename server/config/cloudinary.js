const cloudinary = require('cloudinary')
const cloudinaryStorage = require('multer-storage-cloudinary')
const multer = require('multer')

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
})

const storage = cloudinaryStorage({
  cloudinary,
  folder: 'Adopt_a_pet',
  allowedFormats: ['jpg', 'png', 'jpeg'],
  filename: (req, file, cb) => {
    cb(null, (new Date()).getTime())
  }
})

module.exports = multer({ storage })