/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['gsfont', 'sans-serif'],
      },
      colors: {
        gold: '#FFD700',
      },
    },
  },
  plugins: [],
}

