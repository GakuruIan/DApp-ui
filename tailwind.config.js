/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:{
          10:"#262638",
          20:"#222233",
          50:"#161523",
          100:"#110F1C",
          200:'#11121b'
        },
      },
      fontFamily:{
        saira:['Saira Condensed','sans serif'],
        poppins:['poppins','sans serif']
    } 
    },
  },
  plugins: [],
}

