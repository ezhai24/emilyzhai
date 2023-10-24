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
        blue: "#05B8B9",
        pink: "#FC5CB7",
        gray: "#F5F5F5",
      },
      fontFamily: {
        trailers: ["TT Trailers, sans-serif"],
        poller: ["Poller One, sans-serif"],
        sans: ["Kumbh Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
