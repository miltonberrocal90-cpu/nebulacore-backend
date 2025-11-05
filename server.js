const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Rutas de módulos
app.use('/api/empleados', require('./routes/empleadoRoutes'));
app.use('/api/asistencias', require('./routes/asistenciaRoutes'));
app.use('/api/licencias', require('./routes/licenciaRoutes'));
app.use('/api/nomina', require('./routes/nominaRoutes'));
app.use('/api/vacaciones', require('./routes/vacacionesRoutes'));
app.use('/api/boletas', require('./routes/boletasRoutes'));
app.use('/api/planilla', require('./routes/planillaRoutes'));
app.use('/api/afpnet', require('./routes/afpnetRoutes'));
app.use('/api/documental', require('./routes/documentalRoutes'));
app.use('/api/seguridad', require('./routes/seguridadRoutes'));
app.use('/api/reclutamiento', require('./routes/reclutamientoRoutes'));
app.use('/api/reportes', require('./routes/reportesRoutes'));
app.use('/api/capacitacion', require('./routes/capacitacionRoutes'));
app.use('/api/bienestar', require('./routes/bienestarRoutes'));
app.use('/api/appcolaboradores', require('./routes/appColaboradoresRoutes'));
app.use('/api/evaluaciones', require('./routes/evaluacionesRoutes'));
app.use('/api/contratos', require('./routes/contratosRoutes'));

app.get('/', (req, res) => {
  res.send('🚀 NebulaCore backend está corriendo');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});