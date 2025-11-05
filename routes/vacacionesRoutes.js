const express = require('express');
const router = express.Router();

let vacaciones = [];

router.get('/', (req, res) => {
  res.json(vacaciones);
});

router.post('/', (req, res) => {
  const nuevo = req.body;
  vacaciones.push(nuevo);
  res.json(nuevo);
});

module.exports = router;