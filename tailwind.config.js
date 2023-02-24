/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "#FAFBFF",
          400: "#818CF8",
          600: "#5B68EC",
        },
        navy: "#253A62",
        border: "#DFE2FB",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
