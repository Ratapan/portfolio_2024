import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        coffee_bg: "#F5EDDC",
        coffee_bg_two: "#FFFCF4",
        coffee_foreground: "#422A00",
        coffee_foreground_acent: "#922A00",
      },
    },
  },
  plugins: [],
};
export default config;
