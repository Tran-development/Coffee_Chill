// Adding smaller breakpoints
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': '480px',
      ...defaultTheme.screens,
    },
    extend: {      
      fontFamily : {
        Karla: ['Karla', 'sans-serif']
      },
      colors : {
        coffee: {
          200: "#cba225",
          300: "#b38f1f",
          400: "#705913",
          500: "#58450b",
          600: "#463708"
        }
      },
      keyframes: {
        slideDown: { '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(0)' }, },
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } }
      },
      animation: {
        slideDown: 'slideDown .5s ease-in-out',
        fadeIn: 'fadeIn .5s ease-in-out',
      },
    },
  },
  plugins: [],
}

