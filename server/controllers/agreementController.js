const Request = require('../models/Request')

exports.putAgreement = async (req, res) => {
    const {id: _id, status} = req.params

    if( status === 'denied'){
        await Request.updateOne({ _id }, {status})

        return res.status(201).json({msg: 'Update successfully'})
    }else if( status === 'accepted' ){
        const { pet } = await Request.findOneAndUpdate({ _id },{adopted: true},{new:true})

        await Request.updateMany({pet}, {status: 'denied'})
        await Request.updateOne({ _id }, {status})

        return res.status(201).json({msg: 'Update successfully'})
    }
    return res.status(500).json({msg: 'Error to update'})
}