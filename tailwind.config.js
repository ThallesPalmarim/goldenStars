/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['gsfont', 'sans-serif'],
        trebuc: ['trebuchetMs', 'sans-serif'],
      },
      colors: {
        gold: '#FFD700',
      },
    },
  },
  plugins: [],
}

