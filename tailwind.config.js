/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      // puedes añadir aquí tus colores, tipografías o tamaños personalizados
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'), // opcional: para line-clamp-3 que usamos en cards
  ],
}
