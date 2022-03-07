//DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const methodOverride = require('method-override');
const db = mongoose.connection
const cors = require('cors');

//REQUIRE THESE FOR THE ROUTES
const characterController = require('./controllers/index.js')
const userController = require('./controllers/users_controller.js')

//CONNECT TO ATLAS
require('dotenv').config()
const MONGODB_URI = process.env.MONGODB_URI;

//MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))

//ROUTING
app.use('/games', characterController)
app.use('/', userController)

//CONNECTIONS
mongoose.connect(MONGODB_URI, { useNewUrlParser: true});

db.once('open', () => {
  console.log('Mongoose is connected...', MONGODB_URI);
})

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', myFirstDatabase));
db.on('disconnected', () => console.log('mongo disconnected'));

app.listen(3000, () => {
  console.log('Listening....');
})
