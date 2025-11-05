const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  name: String,
  description: String,
  availableInPlans: [String] // Ejemplo: ["Básico", "Premium"]
});

module.exports = mongoose.model('Module', moduleSchema);