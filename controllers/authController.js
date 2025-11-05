const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { name, email, password, plan } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, plan });
    await user.save();

    const token = jwt.sign({ id: user._id, plan: user.plan }, process.env.JWT_SECRET);
    res.status(201).json({
      token,
      user: {
        name: user.name,
        email: user.email,
        plan: user.plan
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Contraseña incorrecta' });

    const token = jwt.sign({ id: user._id, plan: user.plan }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        name: user.name,
        email: user.email,
        plan: user.plan
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};