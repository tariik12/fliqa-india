/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        itoya: ['Itoya', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}

