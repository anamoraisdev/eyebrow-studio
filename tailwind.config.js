/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4C3232',
        secondary:{
          100:'#d39679',
          200: '#f3a76d'
        },
        complement:{
          100: '#EEE6DF',
          200:'#BAA599',
        }
      },
    },
  },
  plugins: [],
};
