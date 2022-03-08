const mongoose = require('mongoose')
const Schema = mongoose.Schema

const requestsSchema = new Schema(
  {
    image: String,
    title: String,
    releaseDate: String,
    developer: String,
    genre: String,
    representation: String,
    platforms: [String],
    description: String,
    trailer: String
  }
)

const Requests = mongoose.model('Request', requestsSchema)

module.exports = Requests
