/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'textColor': '#C68948',
        'bgWhite': '#EAE8E9',
        'bgBlack': '#040404'
      }
    },
  },
  plugins: [],
}

