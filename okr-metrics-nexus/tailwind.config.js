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
          dark: '#070b14',
          panel: '#0d1527',
          accent: '#06b6d4',
        }
      }
    },
  },
  plugins: [],
}
