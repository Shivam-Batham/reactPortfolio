/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkmode:'class',
  theme: {
    extend: {
      screens: {
        "xxs": "320px",
        'xs': '370px', 
        "ssm":"425px",
      },
    },
  },
  plugins: [],
}