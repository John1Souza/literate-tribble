/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: "#6B4EAE",
          dark: "#5A3E9E",
          light: "#8B6ECE",
          master: "#7B4EBE",
        },
        accent: {
          pink: "#FF4CAF",
        },
        neutral: {
          white: "#FFFFFF",
          "gray-1": "#F5F5F5",
          "gray-2": "#E0E0E0",
          "black-1": "#616161",
          "black-2": "#212121",
        },
        semantic: {
          success: "#4CAF50",
          warning: "#FFC107",
          error: "#F44336",
          info: "#2196F3",
        },
      },
    },
  },
  plugins: [],
};
