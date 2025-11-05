const express = require('express');
const router = express.Router();

let reclutamiento = [];

router.get('/', (req, res) => {
  res.json(reclutamiento);
});

router.post('/', (req, res) => {
  const nuevo = req.body;
  reclutamiento.push(nuevo);
  res.json(nuevo);
});

module.exports = router;