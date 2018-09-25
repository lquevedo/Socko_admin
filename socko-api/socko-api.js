// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const products = require('./products.json');
// const fs = require('fs');
// const cors = require('cors');

// app.use(cors());
// app.use(bodyParser.json());

// app.get('/products', (req, res) => {
//     res.send(products);
// });

// app.get('/products/:id', (req, res) => {
//     for (let i = 0; i < products.length; i++) {
//         if (req.params.id == products[i].id) {
//             res.send(products[i]);
//         }
//     }
// });

// app.delete('/products/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const filteredProducts = products.filter(product => product.id !== id);
//     if (filteredProducts.length === products.length) {
//         return res.status(404).send('Unable to find ID');
//     }
//     fs.writeFileSync('./products.json', JSON.stringify(filteredProducts));
//     res.send(filteredProducts);
// });

// app.post('/products', (req, res) => {
//     console.log(req.body);
//     // expecting {name: "name", age: age, id: id}
//     const { color, size, occasion, id } = req.body;
  
//     if (color && size && occasion && id) {
//       //success
//       const newProduct = {
//         color,
//         size,
//         occasion,
//         id
//       };
//       products.push(newProduct);
//       fs.writeFileSync("./products.json", JSON.stringify(products));
//       res.send(newProduct);
//     } else {
//       res.status(422).send("Unable to add employee");
//     }
//   });

//   app.put('products/:id', (req, res) => {
//     const updateID = req.params.id;
//     for (let i = 0; i < products.length; i++) {
//         if (updateID == products[i].id) {
//             res.send(products[i]);
//             fs.writeFile("./products.json", JSON.stringify(products));
//         }
//         // if (color && size && occasion && id) {
//         //     //success
//         //     const newProduct = {
//         //       color,
//         //       size,
//         //       occasion,
//         //       id
//         //     };
//         //     products.push(newProduct);
//         //     fs.writeFileSync("./products.json", JSON.stringify(products));
//         //     res.send(newProduct);
//         //   } else {
//         //     res.status(422).send("Unable to add employee");
//         //   }
//     }
//   });

// app.listen(3005, () => {
//     console.log('Server is up on localhost:3005');
// });


//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/products', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('Products');

    db.collection('Products').insertOne({
        color: "blue",
        size: "calf",
        occasion: "dress",
        id: 1,
        title: "Mens's Merino Wool Socks",
        description: "Merino Wool is a super strong natural fiber that's incredibly soft, will keep you warm in the winter and breezy-cool in the summer",
        price: 18,
        productImage: "https://res.cloudinary.com/bombas/image/fetch/c_scale,f_auto,q_auto,w_640/https://cdn.shopify.com/s/files/1/1119/5850/products/steel-blue-grid.jpg%3Fv%3D1535563094"
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert product', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    })

    // deleteOne
    // db.collection('Products').deleteOne({itemName: 'Blue Socks'}).then((result) => {
    //     console.log(result);
    // });

    // Insert new doc into Users (name, age, location)
    // db.collection('Users').insertOne({
    //     name: 'Luis',
    //     age: 19,
    //     location: 'Charlotte'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });
    client.close();
});