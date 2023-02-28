/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-1': '#f6ffed',
        'green-2': '#d9f7be',
        'green-3': '#b7eb8f',
        'green-4': '#95de64',
        'green-5': '#73d13d',
        'green-6': '#52c41a',
        'green-7': '#389e0d',
        'green-8': '#237804',
        'green-9': '#135200',
        'green-10': '#092b00',
      },
      margin: {
        '10': '10vw',
        '20': '20vw',
        '30': '30vw',
        '40': '40vw',
        '50': '50vw'
      },
      fontFamily: {
        'roboto': "'Roboto', sans-serif",
      },
      fontWeight: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      },
      width:{
        30: "30vw"
      },
      screens:{
        'mobile' : '360px',
        'tablet' : '1280px',
        'desktop': '1440px'
      }

    },
  },
  plugins: [],
}