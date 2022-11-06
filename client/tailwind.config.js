/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          10:'#ADADB0',
          50:'#F7F7F7',
          100:'#ABADAF',
          500: '#35353D',
          600: '#1D1C21',
          700:'#1840DF',
          800:'rgba(0, 0, 0, 0.5)',
          900:'#EEEEEE',
          1000:'#57535D'
          
        },
        light:{
          10:'#D1D1D2',
          50:'#F5F4F7',
        },
        dash:{
          5:'#000020',
          10:'#35353D',
          20:'#FFFBEF',
          30:'#F0F5FF',
          40:'#E9EAFF',
          50:'#EFEFF1',
          100:'#147AD6',
          
        }
      },
      boxShadow:{
        'cardShadow':"0px 2px 8px rgba(99, 99, 99, 0.2) ",
        'cardShadow2':'0px 0 30px rgb(1 41 112 / 10%)',
      }

    },
    
  },
  plugins: [],
}