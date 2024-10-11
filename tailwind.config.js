/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      doak: {
        whiteff: "#caced6",
        white: '#caced6',
        grey: '#caced6',
        black: '#000000',
      },
    },
    extend: {
      screens: {
        'mobile': '200px',
      },
      fontFamily: {
        custom: ['Termina', 'sans-serif'], 
      },
      fontWeight: {
        normal: 500,
        bold: 700,
        extraBold: 800,
        black: 900
      },
     
    },
   
  },
  plugins: [],
}