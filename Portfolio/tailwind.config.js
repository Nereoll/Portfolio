/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
'./static/*.html',
'./dynamic/*.js',
'./style/*.css',
],
  theme: {
    mode: 'jit',
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        main:['Fira sans','sans-serif'],
      },
      colors: {
        whitesmoke: '#f5f5f5',
        green: {500: '#3bad6b'},
        grey: '#808080',
        transparent: 'rgba(0, 0, 0, 0.733)',
    },
  },
  plugins: [],
  }
}
