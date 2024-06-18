/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        DMSans: ["DM Sans", "sans-serif"],
        playwrite: ["Playwrite IS", "cursive"],
      },
    },
  },
  plugins: [],
};
