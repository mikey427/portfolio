/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
		screens: {
			'2xsm': '375px',
			'xsm': '425px',
			'xxl': '2000px',
			...defaultTheme.screens,
		},
    extend: {
      colors: {
        main: "#0A192F",
        text: "#AEB9D8",
        darktext: "#8892B0",
        lightBG: "#112240",
      },
      // that is animation class
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-in-out",
        "fade-in-down1": "fade-in-down 0.5s ease-in-out",
        "fade-in-down2": "fade-in-down 0.6s ease-in-out",
        "fade-in-down3": "fade-in-down 0.7s ease-in-out",
        "fade-in-down4": "fade-in-down 0.8s ease-in-out",
        "fade-in-down5": "fade-in-down 0.9s ease-in-out",
        "fade-in": "fade-in-up 0.5s ease-in-out",
      },

      // that is actual animation
      keyframes: (theme) => ({
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      }),
    },
  },
  plugins: [],
};
