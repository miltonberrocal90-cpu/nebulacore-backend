const express = require('express');
const router = express.Router();

let afpnet = [];

router.get('/', (req, res) => {
  res.json(afpnet);
});

router.post('/', (req, res) => {
  const nuevo = req.body;
  afpnet.push(nuevo);
  res.json(nuevo);
});

module.exports = router;