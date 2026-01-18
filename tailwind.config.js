/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0B2147',   // Deep professional blue (CodeVidhya inspired)
          darkBlue: '#051329',
          purple: '#7e22ce', // Keep existing purple as secondary
          magenta: '#D0295E', // Bright Magenta/Pink for CTAs
          cyan: '#0EA5E9',
          orange: '#F97316',
          dark: '#0f172a',
          light: '#f8fafc',
        }
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
