/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'pfp': '3px 3px 5px 0px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
};
