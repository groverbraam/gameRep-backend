//DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const db = mongoose.connection
const cors = require('cors');
const characterController = require('./controllers/index.js')

//CONNECT TO ATLAS
require('dotenv').config()
const MONGODB_URI = process.env.MONGODB_URI;

//MIDDLEWARE
app.use(cors())
app.use(express.json())

//ROUTING
app.use('/games', characterController)

//CONNECTIONS
mongoose.connect(MONGODB_URI);

db.once('open', () => {
  console.log('Mongoose is connected...', MONGODB_URI);
})

app.listen(3000, () => {
  console.log('Listening....');
})
