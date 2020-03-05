const Request = require('../models/Request')

exports.putAgreement = async (req, res) => {
    const {id, status} = req.params
    if( status === 'accepted' ) await Request.updateMany({$and: [{pet: id},{status: 'pending'}]}, {status: 'denied'})

    const awaitres = await Request.updateOne({_id: id}, {status}).catch( err => res.status(500).json({msg: err}))
    console.log({awaitres});
    
    res.status(200).json({msg: 'Update successfully'})
}