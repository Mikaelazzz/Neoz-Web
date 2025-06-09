const {heroui} = require('@heroui/react');
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "// Tambahkan path lain sesuai kebutuhan",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'], // Menambahkan font Nunito
        poppins: ['Poppins', 'sans-serif'], // Menambahkan font Poppins
      },
    },
  },
  darkMode: 'class', // Aktifkan mode gelap
  plugins: [heroui()],
};