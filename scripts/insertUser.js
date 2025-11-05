const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/nebulacore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const insertUser = async () => {
  try {
    const hashedPassword = await bcrypt.hash('123456', 10);

    const user = new User({
      name: 'Admin',
      email: 'admin@example.com',
      password: hashedPassword,
      plan: 'premium',
    });

    await user.save();
    console.log('✅ Usuario insertado correctamente');
  } catch (error) {
    console.error('❌ Error al insertar el usuario:', error.message);
  } finally {
    mongoose.disconnect();
  }
};

insertUser();