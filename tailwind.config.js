/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi']
      },

      colors: {
        primary: "#2FA048",
        "primary-black": "#0A0A0A",
        border: "#EBEBEB",
        secondary: "#484848"
      }
    },
  },
  plugins: [],
}

