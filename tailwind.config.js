const {fontFamily} = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['src/app/**/*.{ts,tsx}', 'src/components/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        zuiso: {
          50: '#faf7fd',
          100: '#f3edfa',
          200: '#e9dff5',
          300: '#d8c6ec',
          400: '#bfa0e0',
          500: '#a67bd1',
          600: '#905ebf',
          700: '#7a4ba5',
          800: '#674188',
          900: '#54356e',
          950: '#371d4e',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: {height: 0},
          to: {height: 'var(--radix-accordion-content-height)'},
        },
        'accordion-up': {
          from: {height: 'var(--radix-accordion-content-height)'},
          to: {height: 0},
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      rotate: {
        360: '360deg',
        '360-once': '360deg',
      },
    },
  },
  variants: {
    extend: {
      rotate: ['hover', 'focus'],
    },
  },
  plugins: [require('tailwindcss-animate')],
};
