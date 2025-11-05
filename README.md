# 🚀 NebulaCore API

API REST para la gestión de usuarios y módulos según el plan contratado. Permite registrar usuarios, iniciar sesión y acceder a módulos personalizados según el plan (`Básico` o `Premium`).

---

## 📦 Tecnologías utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- JWT (JSON Web Tokens)
- bcryptjs
- dotenv
- Postman (para pruebas)

---

## ⚙️ Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/nebula-core-api.git
   cd nebula-core-api

2. Instala las dependencias:
bash
npm install

3. Crea un archivo .env en la raíz del proyecto con el siguiente contenido:
env
MONGODB_URI=mongodb://localhost:27017/nebulacore
JWT_SECRET=tu_clave_secreta
PORT=5000

4. Inicia el servidor:
bash
npm start


🔐 Endpoints principales
📘 Registro de usuario
POST /api/auth/register

Body JSON:
json
{
  "name": "Ana",
  "email": "ana@empresa.com",
  "password": "123456",
  "plan": "Premium"
}

Respuesta:
json
{
  "token": "JWT_TOKEN",
  "user": {
    "name": "Ana",
    "email": "ana@empresa.com",
    "plan": "Premium"
  }
}

🔑 Login
POST /api/auth/login

Body JSON:
json
{
  "email": "ana@empresa.com",
  "password": "123456"
}

Respuesta:
json
{
  "token": "JWT_TOKEN",
  "user": {
    "name": "Ana",
    "email": "ana@empresa.com",
    "plan": "Premium"
  }
}


📚 Obtener módulos según plan
GET /api/modules

Headers:

Código
Authorization: Bearer JWT_TOKEN

Respuesta (ejemplo para plan Premium):
json
[
  "Módulo de análisis avanzado",
  "Módulo de reportes personalizados",
  "Módulo de automatización"
]


🧪 Pruebas con Postman
Se creó una colección llamada NebulaCore API con las siguientes solicitudes:
Registrar usuario
Login
Obtener módulos

Las pruebas se realizaron en entorno local (http://localhost:5000)

El token JWT se incluye en el header Authorization como Bearer <token>

📁 Estructura del proyecto
Código
nebula-core-api/
├── controllers/
│   └── authController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── User.js
├── routes/
│   ├── auth.js
│   └── modules.js
├── .env
├── app.js
├── package.json
└── README.md


📌 Notas
El campo email debe ser único. Si intentas registrar el mismo correo dos veces, obtendrás un error de duplicado.
El token JWT incluye el id y el plan del usuario.
Los módulos se filtran según el plan del usuario autenticado.

🧑‍💻 Autor
Desarrollado por Milton Berrocal Castañeda – 2025
Puedes modificar este archivo según tus necesidades o agregar más rutas en el futuro.

Código
---
¿Quieres que te ayude a personalizarlo con tu nombre o agregar una sección de despliegue en producción (por ejemplo, con Render o Railway)?