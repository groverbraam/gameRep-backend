//DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection
const cors = require('cors');
const characterController = require('./controllers/index.js')

//MIDDLEWARE
app.use(cors())
app.use(express.json())

//ROUTING
app.use('/games', characterController)

//CONNECTIONS
mongoose.connect('mongodb://localhost:27017/gameRep')
db.open('open', () => {
  console.log('Mongoose is connected...');
})

app.listen(3000, () => {
  console.log('Listening....');
})
