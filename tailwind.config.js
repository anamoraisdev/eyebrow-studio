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
        primary: '#490707',
        secondary:{
          100:'#EEDECF',
          200: '#B59797'
        },
        complement:{
          100: '#EEE6DF',
        }
      },
    },
  },
  plugins: [],
};
