const express = require('express');
const router = express.Router();

let contratos = [];

router.get('/', (req, res) => {
  res.json(contratos);
});

router.post('/', (req, res) => {
  const nuevo = req.body;
  contratos.push(nuevo);
  res.json(nuevo);
});

module.exports = router;