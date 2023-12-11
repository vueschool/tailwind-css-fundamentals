/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
import typographyPlugin from "@tailwindcss/typography";

/* eslint-env node */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern:
        /bg-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|seaweed)-(50|100|200|300|400|500|600|700|800|900|950)/,
    },
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      xxl: "1800px",
    },
    extend: {
      colors: {
        primary: "#7DDF64", // bg-primary, text-primary, etc
        secondary: "#C0DF85",
        accent: "#ED4D6E",
        seaweed: {
          50: "#def3dc",
          100: "#c7e8c4",
          200: "#9ed09a",
          300: "#7cb976",
          400: "#60a15a",
          500: "#4a8a44",
          600: "#387233",
          700: "#2a5b25",
          800: "#1d431a",
          900: "#132c10",
          950: "#081407",
        },
        green: {
          ...colors.green,
        },
      },
      fontFamily: {
        sans: [
          //font-sans
          // "Avenir Next",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: [
          //font-serif
          "ui-serif",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
        mono: [
          //font-mono
          // "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
        display: [
          // font-display
          "Lobster",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [typographyPlugin],
  important: true,
  // darkMode: "class",
};
