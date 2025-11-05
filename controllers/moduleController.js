const Module = require('../models/Module');

exports.getModulesByPlan = async (req, res) => {
  try {
    const modules = await Module.find({ availableInPlans: req.user.plan });
    res.json(modules);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};