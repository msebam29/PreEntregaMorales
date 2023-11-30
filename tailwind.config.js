/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "verde-lema" : "rgb(106,193,175)",
        "fondo-header" : "rgb(236, 244, 214)",
        "hover" : "rgb(45, 149, 150)",
        "azul-paleta" : "rgb(38, 80, 115)"
      }
    },
  },
  plugins: [],
}

