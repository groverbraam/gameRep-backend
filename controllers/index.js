const express = require('express');
const router = express.Router()
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

router.put('/:id', (req, res) => {
  Game.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedGame) => {
    res.json(updatedGame)
  })
})

router.delete('/:id', (req, res) => {
  Game.findByIdAndDelete(req.params.id, (err, deletedGame) => {
    res.json(deletedGame)
  })
})
module.exports = router
