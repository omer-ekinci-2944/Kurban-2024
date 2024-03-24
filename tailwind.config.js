/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      // default breakpoints but with 40px removed
      // screens: {
      //   sm: "540px",
      //   md: "720px",
      //   lg: "960px",
      //   xl: "1140px",
      //   "2xl": "1320px",
      // },
    },
    extend: {
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        header: ["Instrument Sans", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        "sac-primary": "#09b850",
        "sac-primary-dark": "#089c44",
        // Dark Mode
        "sac-dark-mode": "#161618",
        // Heading, button-black
        "sac-black": "#202124",
        // Paragraphs
        "sac-gray": "#606261",
        // "sac-dark-white": "#F8F8F8",
        // Warning
        "sac-red": "#F8F8F8",
      },
    },
  },
  plugins: [],
};
