const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Place = new Schema(
    {
        name: { type: String, required: true },
        price: {type: String, required: true},
        address: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        petsallow:{type: Boolean, required: true},
        location: {type: Schema.Types.ObjectId, ref: 'locations'}
    },
    { timestamps: true },
)

module.exports = mongoose.model('places', Place)