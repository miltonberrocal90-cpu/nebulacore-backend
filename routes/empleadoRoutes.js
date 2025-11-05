const express = require('express');
const router = express.Router();

let empleados = [];

router.get('/', (req, res) => {
  res.json(empleados);
});

router.post('/', (req, res) => {
  const nuevo = req.body;
  empleados.push(nuevo);
  res.json(nuevo);
});

module.exports = router;