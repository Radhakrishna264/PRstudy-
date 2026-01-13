/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0f1a",
        fg: "#e6e9f2",
        primary: "#7c7cff",
        accent: "#22d3ee"
      }
    }
  },
  plugins: []
};
