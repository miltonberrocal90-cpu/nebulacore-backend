const express = require('express');
const router = express.Router();

let capacitacion = [];

router.get('/', (req, res) => {
  res.json(capacitacion);
});

router.post('/', (req, res) => {
  const nuevo = req.body;
  capacitacion.push(nuevo);
  res.json(nuevo);
});

module.exports = router;