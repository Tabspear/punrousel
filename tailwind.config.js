/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/*.html",
            "./layouts/*.js"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'red': '#E50914',
      'dark':"#303030",
      'bodark': "#222"
    },
    extend: {},
  },
  plugins: [],
}
