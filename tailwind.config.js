/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0a192f",
        cyan: "#00d4ff",
      },
      
      // Add this section:
      fontFamily: {
        signature: ["Dancing Script", "cursive"],
      },
      fontFamily: {
  // This font is much closer to the "Hanzla" screenshot style
  signature: ["'Mrs Saint Delafield'", "cursive"],
},
    },
  },
  plugins: [],
};
