/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'darkPurple': '#5F1478',
        'lightPurple' : '#AE276F',
        'btnOrangeColor': '#E76316',
        'bgLightPink': '#DB25250F',
        'btnError': '#DB2525'
      }
    },
  },
  plugins: [],
}
