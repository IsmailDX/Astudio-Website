import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
