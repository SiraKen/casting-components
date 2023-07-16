/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  prefix: "tw-",
  plugins: [require("prettier-plugin-tailwindcss")],
};
