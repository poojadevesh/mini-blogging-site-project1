const express = require('express')
const bodyParser = require('body-parser')
const route = require('./routes/route')
const mongoose = require('mongoose');
require('dotenv').config();
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://riju:riju@cluster0.s4hmv.mongodb.net/mini-blogging-site", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000,function(){
    console.log('Connected to port: '+ (3000 || process.env.PORT));
 })
 
