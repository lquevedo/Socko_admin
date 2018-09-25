const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {allProducts} = require('../server/models/products');

allProducts.findOneAndRemove('5ba919e8437a78e34f64502e').then((product) => {
    
});

// allProducts.findByIdAndRemove('5ba9068355c439dcee786800').then((product) => {
//     console.log(product);
// });