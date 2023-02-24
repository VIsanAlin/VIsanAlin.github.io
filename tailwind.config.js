const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        border: "border 4s ease infinite",
      },
      keyframes: {
        border: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      colors: {
        firstColor: "#10002B",
        secondColor: "#240046",
        thirdColor: "#3C096C",
        forthColor: "#5A189A",
        fiveColor: "#7b2cbf",
        sixColor: "#9d4edd",
        sevenColor: "#c77dff",
        eightColor: "#E0AAFF",
        nineColor: "#e6bbff",
        tenColor: "#ebc9ff",
        primary: "#202225",
        secondary: "#5865f2",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
