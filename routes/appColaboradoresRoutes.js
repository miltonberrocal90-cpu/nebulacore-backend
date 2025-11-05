const express = require('express');
const router = express.Router();

let appColaboradores = [];

router.get('/', (req, res) => {
  res.json(appColaboradores);
});

router.post('/', (req, res) => {
  const nuevo = req.body;
  appColaboradores.push(nuevo);
  res.json(nuevo);
});

module.exports = router;