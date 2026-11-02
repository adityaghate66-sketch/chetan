/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#080808',
          900: '#0d0d0e',
          850: '#121214',
          800: '#18181b',
          700: '#26262b',
          600: '#3a3a41',
          500: '#5c5c66',
          400: '#8a8a94',
          300: '#b4b4bc',
          200: '#d6d6dc',
        },
        bone: '#f4f3ee',
        electric: {
          400: '#4da3ff',
          500: '#2d8cff',
          600: '#1f6fe0',
        },
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
        },
        success: {
          400: '#4ade80',
          500: '#22c55e',
        },
        warning: {
          400: '#fbbf24',
        },
        error: {
          400: '#f87171',
          500: '#ef4444',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
    },
  },
  plugins: [],
};
