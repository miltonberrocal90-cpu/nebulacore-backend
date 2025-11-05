const express = require('express');
const router = express.Router();

let documental = [];

router.get('/', (req, res) => {
  res.json(documental);
});

router.post('/', (req, res) => {
  const nuevo = req.body;
  documental.push(nuevo);
  res.json(nuevo);
});

module.exports = router;