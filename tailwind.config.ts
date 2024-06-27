import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "body-gradient": "linear-gradient(135deg, #B4E4FF 0%, #F7C8E0 76%)",
      },
      fontFamily: {
        "spicy-rice": ["var(--font-spicy-rice)"],
        pompiere: ["var(--font-pompiere)"],
      },
      boxShadow: {
        "custom-shadow": "0px 4px 20px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        primary: "#042140",
        secondary: "#F25287",
        dark: "#111827",
      },
    },
  },
  plugins: [],
};
export default config;
