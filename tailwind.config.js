/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1400px',
      '2xl': '1600px',
    },
    fontFamily: {
      primary: ['JetBrains', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#0a0a0a', //#1c1c22
        accent: {
          DEFAULT: '#0086b0',
          hover: '#01579b',
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
