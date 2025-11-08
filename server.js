require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');


const app = express();
app.use(cors());
app.use(express.json());


// Carpeta pública para portadas
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Conexión DB
connectDB(process.env.MONGO_URI);


// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/stories', require('./routes/stories'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running en puerto ${PORT}`));