/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'pipn':'#9980FA',
      },
      width: {
        '98p': '98%',      // For percentage-based width
        'custom-rem': '98vw', // Convert 98% width to viewport width, then adjust
      },
      fontSize:{
        '10p':"10px",
        '11p':"11px",
        '25p':"250px",
      },
      boxShadow: {
        'dark-sm': '0 1px 2px rgba(0, 0, 0, 0.6)',
        'dark': '0 4px 6px rgba(0, 0, 0, 0.3)',
        'dark-md': '0 6px 10px rgba(0, 0, 0, 0.8)',
        'dark-lg': '0 10px 15px rgba(0, 0, 0, 0.9)',
        'dark-xl': '0 20px 25px rgba(0, 0, 0, 1.0)',
      }
    },
  },
  plugins: [],
}

