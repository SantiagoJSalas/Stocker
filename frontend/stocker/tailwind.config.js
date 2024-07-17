// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "st_blue": "#2E4052",
        "st_yellow": "#FFC857",
        "st_green": "#9FB7A1",
        "st_gray": "#D0D0D0",
        "st_black": "#252525",
      },
      backgroundImage:{
        "imgModule": "url(src/assets/background.svg)" 
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
  ],
}