/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '2%': '2%',
        '7%': '7%',
        '8%': '8%',
        '10%': '10%',
        '11%': '11%',
        '12%': '12%',
        '13%': '13%',
        '17%': '17%',
        '20%': '20%',
        '30%': '30%',
        '45%': '45%',
        '53%': '53%',
        '65%': '65%',
        '70%': '70%',
        '90%': '90%',
        '95%': '95%'
      },
      fontFamily: {
        Inter: ['Inter', 'regular']
      },
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}