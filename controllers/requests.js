const express = require('express');
const router = express.Router()
const Requests = require('../models/requestSchema')

router.delete('/:id', (req, res) => {
  Requests.findByIdAndDelete(req.params.id, (err, deletedGame) => {
    res.json(deletedGame)
  })
})

router.get('/', (req, res) => {
  Requests.find({}, (err, gamesFound) => {
    res.json(gamesFound)
  })
})

router.post('/', (req, res) => {
  Requests.create(req.body, (err, createdGame) => {
    res.json(createdGame)
  })
})

module.exports = router
