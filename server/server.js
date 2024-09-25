const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const app = express();

// Habilitar CORS para permitir solicitudes desde cualquier origen
app.use(cors());

// Servir archivos estáticos desde la carpeta 'public'
// Usamos path.join para asegurarnos de que las rutas estén bien resueltas
app.use(express.static(path.join(__dirname, '..', 'public')));

// Definir el puerto (puede ser el especificado en el archivo .env o 3000)
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
