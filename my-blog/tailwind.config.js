/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        met: ['"Playfair Display"', 'serif'],
      },
      colors: {
        'prussian-blue': '#003153',
      },
    },
  },
  variants: {},
  plugins: [],
}
