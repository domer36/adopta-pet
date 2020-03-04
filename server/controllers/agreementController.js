const Request = require('../models/Request')

exports.putAgreement = async (req, res) => {
    const {id, status} = req.params
    await Request.updateOne({_id: id}, {status}).catch( err => res.status(500).json({msg: err}))
    res.status(200).json({msg: 'Update successfully'})
}