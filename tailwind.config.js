/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkGreen: '#002029',
        darkLightGreen: '#00303D',
        primaryColor: '#00607A',
        grayColor: '#D9D9D9',
      },
      fontFamily: {
        slackSide: ['Slackside One', 'cursive'],
        popins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
