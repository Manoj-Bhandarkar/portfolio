/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sora:["Sora", 'Inter', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
}