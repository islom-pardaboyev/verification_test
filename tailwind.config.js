/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF2222",
        background: '#0D0C0F',
        grayscale: {
          10: '#F9F9F9',
          30: '#E3E9ED',
          60: '#9CA4AB',
          70: '#78828A'
        },
        lineDark: {
          10: '#29282F'
        }
      },
    },
  },
  plugins: [],
};
