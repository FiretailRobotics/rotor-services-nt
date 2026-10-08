/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        territory: {
          red: '#C94420',
          sand: '#EEE5D8',
          grey: '#26343D',
          offwhite: '#F8F8F8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Work Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
