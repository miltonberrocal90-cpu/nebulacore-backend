const express = require('express');
const router = express.Router();

let seguridad = [];

router.get('/', (req, res) => {
  res.json(seguridad);
});

router.post('/', (req, res) => {
  const nuevo = req.body;
  seguridad.push(nuevo);
  res.json(nuevo);
});

module.exports = router;