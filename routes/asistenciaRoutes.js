const express = require('express');
const router = express.Router();

let asistencias = [];

router.get('/', (req, res) => {
  res.json(asistencias);
});

router.post('/', (req, res) => {
  const nuevo = req.body;
  asistencias.push(nuevo);
  res.json(nuevo);
});

module.exports = router;