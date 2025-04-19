/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    darkMode: "class",
    theme: {
      extend: {
        fontFamily: {
          sans: ['"Inter"', "sans-serif"],
        },
        colors: {
          primary: "#3b82f6",
          secondary: "#10b981",
        },
      },
    },
    plugins: [],
  };
  