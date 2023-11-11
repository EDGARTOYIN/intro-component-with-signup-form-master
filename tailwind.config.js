/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./index.js"],
  theme: {
    extend: {
      colors: {
        "red-custom": "hsl(0, 100%, 74%)",
        "green-custom": "hsl(154, 59%, 51%)",
        "green-hover": "hsl(154, 59%, 61%)",

        "blue-custom": "hsl(248, 32%, 49%)",

        "dark-blue": "hsl(249, 10%, 26%)",
        "grayish-blue": "hsl(246, 25%, 77%)",
      },
      fontFamily: {
        "default-ff": "Poppins",
      },
    },
  },
  plugins: [],
};
