# BookVerse
BookVerse es una biblioteca digital desarrollada con el Stack MERN.  
Permite a autores y lectores conectar en una misma plataforma para publicar, leer y vender novelas digitales.

Perfecto ⚙️ te dejo **una guía completa paso a paso** para ejecutar tu proyecto **BookVerse (MERN)** desde cero — tanto **frontend** como **backend** — en tu computadora.
Te servirá para **subir y leer historias**, con autenticación, imágenes y base de datos.

---

## 🌐 Estructura del proyecto

Tu carpeta final debe verse así:

```
bookverse/
│
├── backend/
│   ├── server.js
│   ├── models/
│   │   ├── User.js
│   │   └── Story.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── storyRoutes.js
│   ├── uploads/
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── StoryCard.jsx
    │   │   └── ...
    │   ├── pages/
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   ├── StoryList.jsx
    │   │   ├── StoryDetail.jsx
    │   │   ├── UploadStory.jsx
    │   │   └── Profile.jsx
    │   ├── App.jsx
    │   ├── api.js
    │   └── main.jsx
    │
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── index.html
    └── package.json
```

---

## 🧠 Paso 1 — Instalar requisitos

Asegúrate de tener instalados:

* **Node.js** (versión 18 o superior)
* **MongoDB** (local o una cuenta de **MongoDB Atlas**)
* **npm** o **yarn**

Puedes comprobar con:

```bash
node -v
npm -v
```

---

## 🧩 Paso 2 — Configurar el Backend

Entra a la carpeta:

```bash
cd backend
```

### 1️⃣ Inicializa el proyecto

```bash
npm init -y
```

### 2️⃣ Instala las dependencias

```bash
npm install express mongoose bcryptjs jsonwebtoken multer cors dotenv
```

> **Explicación:**
>
> * `express`: servidor web
> * `mongoose`: conexión a MongoDB
> * `bcryptjs`: encriptar contraseñas
> * `jsonwebtoken`: autenticación con tokens
> * `multer`: subir imágenes
> * `cors`: permitir conexiones desde el frontend
> * `dotenv`: para usar variables `.env`

---

### 3️⃣ Crea el archivo `.env`

En `backend/.env`:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/bookverse
JWT_SECRET=superclaveultrasecreta
```

> Si usas MongoDB Atlas, reemplaza `MONGO_URI` con la URL de conexión.

---

### 4️⃣ Crea el archivo principal `server.js`

(Si aún no lo tienes, te lo puedo generar después.)

Luego ejecuta:

```bash
node server.js
```

O mejor aún, instala **nodemon** para que se reinicie solo:

```bash
npm install -g nodemon
nodemon server.js
```

Deberías ver algo como:

```
Servidor corriendo en puerto 5000
Conectado a MongoDB
```

---

## 🎨 Paso 3 — Configurar el Frontend

En otra terminal, entra en la carpeta:

```bash
cd frontend
```

### 1️⃣ Crea el proyecto con Vite (si no lo tienes aún)

```bash
npm create vite@latest
```

Selecciona:

```
Project name: frontend
Framework: React
Variant: JavaScript
```

Luego entra a la carpeta:

```bash
cd frontend
```

---

### 2️⃣ Instala dependencias

```bash
npm install
npm install axios react-router-dom
npm install -D tailwindcss postcss autoprefixer @tailwindcss/line-clamp
npx tailwindcss init -p
```

---

### 3️⃣ Configura Tailwind

Asegúrate de tener en `tailwind.config.js`:

```js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
```

Y en tu `src/index.css` o `src/main.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### 4️⃣ Configura la API

En `src/api.js` crea:

```js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};

export default API;
```

---

### 5️⃣ Ejecuta el frontend

```bash
npm run dev
```

Deberías ver algo como:

```
  VITE v5.0.0  ready in 300ms
  ➜  Local:   http://localhost:5173/
```

---

## 🧱 Paso 4 — Probar el proyecto

1. Abre `http://localhost:5173`
2. Crea una cuenta en **Registro**
3. Inicia sesión
4. Sube una historia (título, contenido, imagen)
5. Verás tu historia en la lista principal
6. Desde tu **Perfil**, podrás ver tus historias y cerrar sesión

---

## ⚙️ Paso 5 — Solución de problemas comunes

| Error                            | Solución                                                                      |
| -------------------------------- | ----------------------------------------------------------------------------- |
| `CORS policy error`              | Asegúrate de usar `app.use(cors())` en el backend                             |
| `Network Error` o `ECONNREFUSED` | Backend no está corriendo o `baseURL` incorrecto                              |
| Imagen no carga                  | Revisa si `uploads/` está en `app.use("/uploads", express.static("uploads"))` |
| MongoDB no conecta               | Verifica que el servicio esté activo o la URL sea correcta                    |

---

## ✅ Paso 6 — Personalización opcional

* Cambia colores en `tailwind.config.js`
* Agrega portadas predeterminadas a historias sin imagen
* Crea un sistema de “likes” o “comentarios”
* Sube a producción (Render, Vercel, Railway, Atlas)
