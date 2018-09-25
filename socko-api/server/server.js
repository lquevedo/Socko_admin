const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {allProducts} = require('./models/products');
const cors = require('cors');
const {ObjectID} = require('mongodb');

require('./db/mongoose');


const app = express();
app.use(cors());

app.use(bodyParser.json());

app.post('/products', (req, res) => {
    const {color, size, occasion, title, description, price, productImage} = req.body;
    const product = new allProducts ({
        color,
        size,
        occasion,
        title,
        description,
        price,
        productImage
    });

    product.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

// GET all products
app.get('/products', (req, res) => {
    allProducts.find({}).then((products) => {
        res.send(products)
    }, (e) => {
        res.status(400).send(e);
    });
});

//GET by id
app.get('/products/:id', (req, res) => {
    let id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    allProducts.findById(id).then((product) => {
        if(!product) {
            return res.status(404).send();
        }

        res.send({product})
    }).catch((e) => {
        res.status(400).send(e);
    })
});

app.delete('/products/:id', (req, res) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    allProducts.findByIdAndDelete(id).then((product) => {
        if (!product) {
            return res.status(404).send();
        }
        res.send(product);

    }).catch((e) => {
        res.status(400).send(e);
    })
});

app.put('/products/:id', (req, res) => {
    const id = req.params.id;
    const body = _.pick(req.body, ['color', 'size', 'occaion', 'productID', 'title', 'description', 'price', 'productImage']);
    
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    allProducts.findByIdAndUpdate(id, {$set: body}, {new: true}).then((product) => {
        if (!product) {
            return res.status(404).send();
        }
        res.send({product})
    }).catch((e) => {
        res.status(400).send(e);
    });

});

app.listen(3005, () => {
    console.log('Started on port 3005');
});
