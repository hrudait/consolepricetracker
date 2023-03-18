const express = require('express')
const path = require('path')
const MongoClient = require('mongodb').MongoClient
const app = express();
const PORT = app.listen(process.env.PORT || 5000)
const fs = require("fs");

app.use(express.json());

var database
var text
app.get('/bruh',(req,resp)=>{
  resp.send('Welcome to Console Price Tracker')
})

app.get('/',(req,resp)=>{
  fs.readFile(__dirname + "/static-website/index.html", (error, data2) => {
    if(error) {
        throw error;
    }
    text = data2.toString();
  },
  );
  database.collection('stockx').findOne(
    {},
    { sort: { _id: -1 } },
    (err, data) => {
        text = text.replace("replacedisc", "Price: "+ data.price);
    });
  database.collection('stockxdigi').findOne(
    {},
    { sort: { _id: -1 } },
    (err, data) => {
        text = text.replace("replacedigi", "Price: "+ data.price);
    });
    database.collection('stockxseriesx').findOne(
    {},
    { sort: { _id: -1 } },
    (err, data) => {
        text = text.replace("replaceseriesx", "Price: "+ data.price);
    });
    database.collection('ckingsdisc').findOne(
      {},
      { sort: { _id: -1 } },
      (err, data) => {
          text = text.replace("replacedisc2", "Price: "+ data.price);
      });
    database.collection('ckingsdigi').findOne(
    {},
    { sort: { _id: -1 } },
    (err, data) => {
        text = text.replace("replacedigi2", "Price: "+ data.price);
    });
    database.collection('ckingsseriesx').findOne(
    {},
    { sort: { _id: -1 } },
    (err, data) => {
        text = text.replace("replaceseriesx2", "Price: "+ data.price);
    });
    resp.send(text);
})


app.listen(PORT,()=>{
  MongoClient.connect("mongodb+srv://ptracker:Hellome123@cluster0.pbvd7.mongodb.net/prices?retryWrites=true&w=majority",{useNewUrlParser:true},(err,result)=>{
    if(err) throw error;
    database = result.db('prices')
    console.log("worked")
  })
})

