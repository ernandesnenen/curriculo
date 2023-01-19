

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-color': '#0b2d39',
        'destaque': '#0e7490',
      }, 
      backgroundImage: {
        'bgbody': "url('/base.png')",
        
      },
      fontSize : {
        base: '1.25rem'
      },
     
     },  
  },
 
  plugins: [],
}
