/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
        quicksand: ["Quicksand", "sans-serif"],
        montserrat: ['Montserrat', 'sans-serif'],
        shadows: ['Shadows Into Light', 'cursive']
      },
    },
  },
  plugins: [],
}
