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
const PORT = process.env.PORT || 3003
const myFirstDatabase = process.env.MONGODB_URI;

//CONNECTIONS
mongoose.connect(myFirstDatabase, { useNewUrlParser: true });

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', myFirstDatabase));
db.on('disconnected', () => console.log('mongo disconnected'));

//MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))

//ROUTING
app.use('/games', characterController)
app.use('/', userController)

app.listen(PORT, () => {
  console.log('Listening....' + PORT);
})
