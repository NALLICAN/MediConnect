/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary' : "#A0D6D1"
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill,minmax(200px,1fr))'
      }
    },
  },
  plugins: [],
}