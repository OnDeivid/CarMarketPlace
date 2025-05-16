/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#212324',
        primary: '#DC5F00',
        secondary: '#ffffff',
        accent: '#474646',
        loginBackground: "#cecaca",
        filterBackground: '#474646',
        filterField:'#f8852e'
      }
    },
  },
  plugins: [],
}
