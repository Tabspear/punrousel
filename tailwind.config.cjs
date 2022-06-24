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
      'red': '#db0000',
      'dark':"#564d4d",
      'darkred': "#831010"
    },
    extend: {
      textDecorationThickness: {
        3: '10px',
      }
    },
  },
  plugins: [],
}
