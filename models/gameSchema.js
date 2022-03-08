const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema = new Schema(
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

const Games = mongoose.model('Game', gameSchema)

module.exports = Games
