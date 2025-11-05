const express = require('express');
const router = express.Router();

let reportes = [];

router.get('/', (req, res) => {
  res.json(reportes);
});

router.post('/', (req, res) => {
  const nuevo = req.body;
  reportes.push(nuevo);
  res.json(nuevo);
});

module.exports = router;