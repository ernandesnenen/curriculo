

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base': '#0b2d39',
        'destaque': '#2596be',
      }, 
      backgroundImage: {
        'bgbody': "url('/base.png')",
        
      },  
     
     },  
  },
 
  plugins: [],
}
