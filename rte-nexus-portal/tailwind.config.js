/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#111c38',
          850: '#0d152a',
          900: '#080e1e',
          950: '#040711',
        },
        sapphire: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        gold: {
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
        },
        slate: {
          850: '#141d2e',
          900: '#0f172a',
          950: '#080d1a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-sapphire': '0 0 30px -5px rgba(37, 99, 235, 0.35)',
        'glow-gold': '0 0 30px -5px rgba(234, 179, 8, 0.3)',
        'glow-emerald': '0 0 30px -5px rgba(16, 185, 129, 0.3)',
        'glass-pro': '0 10px 40px 0 rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
