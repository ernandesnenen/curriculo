

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'head-color': '#0E2430',
      }, 
      backgroundImage: {
        'bgbody': "url('/bg_grafico.png')",
        
      },  
     
     },  
  },
 
  plugins: [],
}
