// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Adjust path as per your project
  theme: {
    extend: {
      colors: {
        "themeColor": "#ec1839",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};