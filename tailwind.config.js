/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#273812',
        'second-green': '#B8CAA8',
        'third-green':'#3C5220'
      }
    }
  },
  plugins: [],
}