/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkTheme: '#1101ff', // fixed hex code
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
