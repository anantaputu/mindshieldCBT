/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

