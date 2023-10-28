import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      s2: { min: "0px", max: "384px" },

      s1: { min: "385px", max: "639px" },

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        neutraface: "Neutraface",
        neutrafaceTextBook: "NeutrafaceTextBook",
      },
      colors: {
        primary: "#3F3B38",
      },
    },
  },
  plugins: [],
};
export default config;
