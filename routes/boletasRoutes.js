const express = require('express');
const router = express.Router();

let boletas = [];

router.get('/', (req, res) => {
  res.json(boletas);
});

router.post('/', (req, res) => {
  const nuevo = req.body;
  boletas.push(nuevo);
  res.json(nuevo);
});

module.exports = router;