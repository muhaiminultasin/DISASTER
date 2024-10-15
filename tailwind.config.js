/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryText: "#71717A", // Custom color added
        orange: "#F26922", // Example of another custom color
        secondary: "#9333EA", // Another custom color
      },
    },
  },
  plugins: [],
};
