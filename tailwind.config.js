/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        select: "var(--color-bg-select",
      },
      textColor: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        select: "var(--color-text-select",
      },
      fontFamily: {
        abc: ["Open Sans"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
