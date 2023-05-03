/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'input': '0px 0px 0px 5px rgba(210, 6, 35, 0.15);',
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
}
