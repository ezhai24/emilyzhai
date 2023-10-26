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
        trailers: ["var(--font-trailers), sans-serif"],
        poller: ["var(--font-poller), sans-serif"],
        "kumbh-bold": ["var(--font-kumbh-bold), sans-serif"],
        sans: ["var(--font-kumbh)", ...defaultTheme.fontFamily.sans],
      },
      flex: {
        "5": "5 5 0%",
        "9": "9 9 0%",
      },
      spacing: {
        "100": "28rem",
      },
    },
  },
  plugins: [],
};
export default config;
