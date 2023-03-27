/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      base: [
        '12px',
        { fontWeight: 500, lineHeight: '15px', letterSpacing: '-0.25px' },
      ],
      base2: [
        '11px',
        { fontWeight: 500, lineHeight: '18px', letterSpacing: '- 0.23px' },
      ],
      lg: [
        '12px',
        { fontWeight: 700, lineHeight: '15px', letterSpacing: '-0.25px' },
      ],
      '2lg': [
        '16px',
        { fontWeight: 700, lineHeight: '24px', letterSpacing: '-0.8px' },
      ],
      xl: [
        '20px',
        { fontWeight: 700, lineHeight: '22px', letterSpacing: '-0,63px' },
      ],
      '2xl': [
        '32px',
        { fontWeight: 700, lineHeight: '36px', letterSpacing: '-1px ' },
      ],
    },
    fontFamily: {
      spartan: ['League Spartan', 'sans-serif'],
    },
    colors: {
      purple: '#7C5DFA',
      purpleLight: '#9277FF',
      purpleVeryDark: '#1E2139',
      purpleDark: '#252945',
      lightGray: '#DFE3FA',
      gray: '#888EB0',
      blue: '#7E88C3',
      black: '#0C0E16',
      white: '#ffffff',
      red: '#EC5757',
      lightRed: '#FF9797',
      lightBG: '#F8F8FB',
      darkBG: '#141625',
    },
    extend: {},
  },

  plugins: [],
};
