const express = require('express');
const router = express.Router();

let nomina = [];

router.get('/', (req, res) => {
  res.json(nomina);
});

router.post('/', (req, res) => {
  const nuevo = req.body;
  nomina.push(nuevo);
  res.json(nuevo);
});

module.exports = router;