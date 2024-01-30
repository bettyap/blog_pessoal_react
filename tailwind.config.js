/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dodger-blue': {
          '50': '#f0f7ff',
          '100': '#e0effe',
          '200': '#bbdefc',
          '300': '#7fc4fa',
          '400': '#3aa6f6',
          '500': '#118de9',
          '600': '#056dc4',
          '700': '#05569f',
          '800': '#094b83',
          '900': '#0d3f6d',
          '950': '#092848',
        },
      }
    },
  },
  plugins: [],
}