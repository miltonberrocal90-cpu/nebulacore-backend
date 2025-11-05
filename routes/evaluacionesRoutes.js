const express = require('express');
const router = express.Router();

let evaluaciones = [];

router.get('/', (req, res) => {
  res.json(evaluaciones);
});

router.post('/', (req, res) => {
  const nuevo = req.body;
  evaluaciones.push(nuevo);
  res.json(nuevo);
});

module.exports = router;