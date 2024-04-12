/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["Open Sans"],
        oswald: ["Oswald"],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
    },
  },
  plugins: [],
};
