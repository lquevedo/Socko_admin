const {ObjectID} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {allProducts} = require('../server/models/products');

const id = '5ba8e689162431ce54a5cdeb';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid')
};

// allProducts.find({
//     _id:id
// }).then((products) => {
//     console.log('Products', products);
// });

// allProducts.findOne({
//     _id:id
// }).then((product) => {
//     console.log('Products', product);
// });

allProducts.findById(id).then((product) => {
    if(!product) {
        return console.log('Id not found');
    }
    console.log('Product by ID', product);
}).catch((e) => {console.log(e)});