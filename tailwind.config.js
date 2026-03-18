/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C89B0A',
          light: '#E8B800',
          dark: '#A07808',
        },
        gym: {
          black: '#080808',
          dark:  '#1E1A0E',
          gray:  '#2E2E2E',
          offwhite: '#F2EFE6',
        },
      },
      fontFamily: {
        heading: ['var(--font-bebas)', 'sans-serif'],
        body:    ['var(--font-barlow)', 'sans-serif'],
      },
      animation: {
      'spin-slow':    'spin 20s linear infinite',
      'spin-reverse': 'spin 30s linear infinite reverse',
      'shimmer':      'shimmer 3s ease-in-out infinite',
      'bounce-slow':  'bounce 2s ease-in-out infinite',
      'float':        'float 4s ease-in-out infinite',   
      },
      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '0% 50%' },
          '50%':  { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}