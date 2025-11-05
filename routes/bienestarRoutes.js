const express = require('express');
const router = express.Router();

let bienestar = [];

router.get('/', (req, res) => {
  res.json(bienestar);
});

router.post('/', (req, res) => {
  const nuevo = req.body;
  bienestar.push(nuevo);
  res.json(nuevo);
});

module.exports = router;