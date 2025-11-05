const express = require('express');
const router = express.Router();

let planilla = [];

router.get('/', (req, res) => {
  res.json(planilla);
});

router.post('/', (req, res) => {
  const nuevo = req.body;
  planilla.push(nuevo);
  res.json(nuevo);
});

module.exports = router;