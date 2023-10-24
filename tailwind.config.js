/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./projects/traveller-app/src/**/*.{html, ts}"],
  theme: {
    /** The colors defined here will completely replace the default color palette  */
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      "navy-blue": "#05445E",
      "blue-green": "#75E6DA",
      "baby-blue": "#D4F1F4",
      "hot-pink": "#FFAEBC",
      mint: "#B4F8C8",
      yellow: "#FBE7C6",
    },
    extend: {},
  },
  plugins: [],
};
