import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        md: "800px",
      },
      colors: {
        blue: "rgb(var(--color-blue) / <alpha-value>)",
        pink: "rgb(var(--color-pink) / <alpha-value>)",
        gray: "rgb(var(--color-gray) / <alpha-value>)",
      },
      fontFamily: {
        trailers: ["TT Trailers, sans-serif"],
        poller: ["Poller One, sans-serif"],
        sans: ["Kumbh Sans", ...defaultTheme.fontFamily.sans],
      },
      flex: {
        "5": "5 5 0%",
        "9": "9 9 0%",
      },
    },
  },
  plugins: [],
};
export default config;
