const router = require('express').Router()
const {putAgreement} = require('../controllers/agreementController')

router.put('/:id/:status', putAgreement)

module.exports = router