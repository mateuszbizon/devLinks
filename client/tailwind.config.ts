import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '3xl': ['2rem', {
          fontWeight: '700',
        }],
        'lg': ['1rem', {
          fontWeight: '700',
        }],
        'base': ['1rem', {
          fontWeight: '400',
        }],
        'xs': ['0.75rem', {
          fontWeight: '400',
        }],
      },
      colors: {
        "purple": "var(--purple)",
        "purple-hover": "var(--purple-hover)",
        "purple-light": "var(--purple-light)",
        "grey": "var(--grey)",
        "grey-dark": "var(--grey-dark)",
        "grey-light": "var(--grey-light)",
        "borders": "var(--borders)",
        "red": "var(--red)",
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        fadeOut: 'fadeOut 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      padding: {
        'nav-container' : '1.5rem',
      },
      height: {
        'nav': '5rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
