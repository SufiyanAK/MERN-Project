/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f172a', // Dark blue background
        "gradient-start": '#4E65FF', // Light blue background
        "gradient-end": '#1a202c', // Dark blue background
        "btn-clr": '#4E65FF', // Light blue background
        primary: {
          DEFAULT: '#6366f1', // Indigo
          light: '#e0e7ff'    // Light indigo
        },
        secondary: {
          DEFAULT: '#f8fafc', // Slate 50
          dark: '#94a3b8'     // Slate 400
        }
      },
      boxShadow: {
        'glow': '0 0 15px rgba(99, 102, 241, 0.5)',
      }
    },
  },
  plugins: [],
}