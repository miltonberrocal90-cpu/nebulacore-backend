const express = require('express');
const router = express.Router();

let licencias = [];

router.get('/', (req, res) => {
  res.json(licencias);
});

router.post('/', (req, res) => {
  const nuevo = req.body;
  licencias.push(nuevo);
  res.json(nuevo);
});

module.exports = router;