const express = require('express')
const path = require('path')
const MongoClient = require('mongodb').MongoClient
const app = express();
const PORT = app.listen(process.env.PORT || 5000)


database.collection('stockx').findOne(
    {},
    { sort: { _id: -1 } },
    (err, data) => {
      document.getElementById("bruh").innerHTML = "Price "+data.price;
    },
);
  