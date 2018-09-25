const mongoose = require ('mongoose');

let productsSchema = new mongoose.Schema({
    color: {
        type: String,
        required: true,
        trim: true
    },
    size: {
        type: String,
        required: true,
        trim: true
    },
    occasion: {
        type: String,
        required: true,
        trim: true
    },
    productID: {
        type: Number,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    productImage: {
        type: String,
        required: true,
        trim: true
    },
});

let allProducts = mongoose.model('Products', productsSchema);

module.exports = {allProducts};