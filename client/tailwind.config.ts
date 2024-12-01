import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple": "var(--purple)",
        "purple-hover": "var(--purple-hover)",
        "purple-light": "var(--purple-light)",
        "grey": "var(--grey)",
        "grey-dark": "var(--grey-dark)",
        "grey-light": "var(--grey-light)",
        "borders": "var(--borders)",
        "red": "var(--red)",
      }
    },
  },
  plugins: [],
} satisfies Config;
