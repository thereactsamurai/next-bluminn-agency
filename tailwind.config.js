/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/background.jpg')",
      },
      colors: {
        brand: {
          blue: {
            100: "#88BCFF",
            200: "#5FA4FF",
            300: "#1560BD",
            bg: "#0066FF",
          },
        },
      },
      container: { center: true },
    },
    fontFamily: {
      heading: ["Montserrat", "sans-serif"],
      body: ["Crimson Text", "serif"],
    },
  },
  plugins: [],
};
