import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "internation-orange": "hsla(var(--color-internation-orange-hsl), 1)",
      "white-smoke": "hsla(var(--color-white-smoke-hsl), 1)",
      gunmetal: "hsla(var(--color-gunmetal-hsl), 1)",
      azure: "hsla(var(--color-azure-hsl), 1)",
      "artyclick-red": "hsla(var(--color-artyclick-red-hsl), 1)",
      "chrome-yello": "hsla(var(--color-chrome-yello-hsl), 1)",
      "primary": "hsla(var(--color-primary-hsl), 1)",
      "secondary": "hsla(var(--color-secondary-hsl), 1)",
      "error": "hsla(var(--color-error-hsl), 1)",
      "warning": "hsla(var(--color-warning-hsl), 1)",
      "foreground": "hsla(var(--color-foreground-hsl), 1)",
      "background": "hsla(var(--color-background-hsl), 1)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
