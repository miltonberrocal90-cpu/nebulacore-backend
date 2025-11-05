const express = require('express');
const router = express.Router();
const { getModulesByPlan } = require('../controllers/moduleController');
const auth = require('../middleware/authMiddleware');

router.get('/', auth, getModulesByPlan);

module.exports = router;