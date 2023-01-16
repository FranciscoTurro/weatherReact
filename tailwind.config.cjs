/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        custom_gray: {
          100: '#dee3ea',
          200: '#b2bdcd',
          300: '#5d7290',
          600: '#323d4d',
          700: '#242c37',
          800: '#151a21',
          900: '#0b0e11',
        },
        custom_red: '#fd4d4d',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
