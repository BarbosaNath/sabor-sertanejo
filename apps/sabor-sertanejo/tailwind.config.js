/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        light: "#F2C292",
        DEFAULT: "#F19C47",
        dark: "#DF750C",
      },
      secondary: {
        light: "#2C2C2C",
        DEFAULT: "#1E1E1E",
        dark: "#0A0A0A",
      },
      tertiary: {
        light: "#F3F3F3",
        DEFAULT: "#B3B3B3",
        dark: "#767676",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
