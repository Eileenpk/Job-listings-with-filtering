/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white-color": "#FFFFFF",
        "main-color": "#F2F2F2",
        "third-color": "#2B3939",
        "second-color": "#5CA5A5",
        "heading-color": "#33323d",
        "font-color": "#143642",
        "light-font-color": "#7C8F8F",
        "hover-color": "#5CA5A5",
        "btn-hover-color": "#2B3939",
        "tag-background-color": "#eff6f6",
      },
    },
  },
  plugins: [],
};
