/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"]
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'mediumgrey': '#686868',
      'darkgrey': '#343434',
    },
    extend: {
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
      }
    },
  },
  plugins: [],
}
