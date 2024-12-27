/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#a855f7',
          DEFAULT: '#d041f4',
          dark: '#7e22ce',
        },
        secondary: {
          light: '#60a5fa',
          DEFAULT: '#3b82f6',
          dark: '#1d4ed8',
        },
      },
    },
  },
  plugins: [],
};