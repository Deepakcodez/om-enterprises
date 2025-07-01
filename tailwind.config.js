// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // (if using Next.js 13+ App Router)
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1960px', 
      },
      maxWidth: {
        "screen-3xl": "2560px",
      },
    },
  },
  plugins: [],
};