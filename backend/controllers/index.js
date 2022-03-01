const express = require('express')
const router = express.router

const Game = require('../models/gameSchema')

router.get('/', (req, res) => {
  Game.find({}, (err, gamesFound) => {
    res.json(gamesFound)
  })
})

router.post('/', (req, res) => {
  Game.create(req.body, (err, createdGame) => {
    res.json(createdGame)
  })
})
