/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        darkgray: '#2d373c',
        primary: {
          dark: '#054c48',
          DEFAULT: '#10847e',
          light: '#14a199',
        },
      },
    },
  },
  plugins: [],
}

