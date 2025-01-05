/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#f0f4f8',
          dark: '#111827',
        },
        "gradient-start": '#3b82f6',
        "gradient-end": '#1e40af',
        "light-gradient-start": '#f0f4f8',
        "light-gradient-end": '#e2e8f0',
        "btn-clr": {
          light: '#3b82f6',
          dark: '#2563eb',
          hover: '#1d4ed8'
        },
        primary: {
          DEFAULT: '#3b82f6',
          light: '#bfdbfe'
        },
        secondary: {
          DEFAULT: '#f8fafc',
          dark: '#94a3b8'
        }
      },
      boxShadow: {
        'glow': '0 0 15px rgba(59, 130, 246, 0.5)',
      }
    },
  },
  plugins: [],
}