/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "mob-sm": "350px",
        "mob-md": "420px",
        "mob-lg": "500px",
      },
      fontFamily: {
        signature: ["Great Vibes"],
      },
    },
  },
  plugins: [],
};
