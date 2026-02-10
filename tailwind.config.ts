import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cyan: {
          350: '#00E5FF',
          450: '#00D9FF',
        },
        electric: '#00D9FF',
        lime: {
          400: '#CCFF00',
          500: '#B8E600',
          600: '#A3CC00',
        },
      },
      fontFamily: {
        display: ['"SF Pro Display"', '"Segoe UI"', 'system-ui', 'sans-serif'],
        body: ['"SF Pro Text"', '"Segoe UI"', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'black': '900',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'orbit': 'orbit 12s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-fast': 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
