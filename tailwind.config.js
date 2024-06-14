/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: "class",
  theme: {
    
    extend: { 
      colors: {
      // // Define your custom color themes here
      // primary: 'var(--primary-color)',
      // secondary: 'var(--secondary-color)',
      // shade:'var(--shade--color)'
      'gray-light': 'rgb(249, 249, 249)',
      'hard-light':'#f4f4f4'

    },},
  },
  plugins: [],
}
