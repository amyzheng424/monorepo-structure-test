/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./projects/traveller-app/src/**/*.{html, ts}"],
  theme: {
    extend: {
      /** Add additonal colours to the default color palette  */
      colors: {
        "navy-blue": "#05445E",
        "blue-green": "#75E6DA",
        "baby-blue": "#D4F1F4",
        "hot-pink": "#FFAEBC",
        mint: "#B4F8C8",
        yellow: "#FBE7C6",
      },
    },
  },
  plugins: [],
};
