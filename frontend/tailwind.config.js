/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'blue': '#B8D4E4',
      'white': '#FFFFFF',
      'blue-btn': '#8fd2ff',
      'blue-btn-hover': '#28a5f8',
      'fondo': '#b8d4e4',
      'fondo2': '#ccebe9',
      'green': 'green',
      'red': 'red',
      'black': 'black'
      
    },
    extend: {
      boxShadow: {
        '3x': '-20px -20px #B8D4E4',
        '2x': '-15px -15px #B8D4E4',
        'navbar': '0px 15px #B8D4E4'


      }
    },
  },
  plugins: [],
}

