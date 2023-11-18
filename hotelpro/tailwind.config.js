/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "my-light-beige": "#FDF8F0",
        "my-brown": "#99775C",
      },
      fontFamily: {
        kalam: ["Kalam", "cursive"],
        sans: ["Open Sans", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
