/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {    
      colors: {
      'sandal': {	50: '#FBFAF8',	100: '#E8DED5',	200: '#D4C3B2',	300: '#C1A78F',	400: '#A88A6D',	500: '#93785F',	600: '#7E6752',	700: '#685644',	800: '#534436',	900: '#3E3328',	950: '#29211A',},
      },
    backgroundImage: {
      'saigalogo': "url('./src/images/saigalogo.png')",
      },
  },
  },
  plugins: [],
}

