/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        coolvetica: ['Coolvetica Rg', 'sans-serif'],
        satoshi: ['Satoshi Variable', 'sans-serif'],
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
