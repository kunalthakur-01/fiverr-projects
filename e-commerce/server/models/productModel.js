const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String, 
        required: true,
    },
    mrp: {
        type: Number, 
        required: true,
    },
    price: {
        type: Number, 
        required: true,
    },
    category: {
        type: String, 
        required: true,
    },
    brand: {
        type: String, 
        required: true,
    },
    madeIn: {
        type: String,
        required: true
    },
    images: [Object],
    creator: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

module.exports = mongoose.model('Product', productSchema);