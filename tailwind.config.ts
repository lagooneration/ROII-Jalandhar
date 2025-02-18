import type { Config } from "tailwindcss";
import fluid, { extract, screens, fontSize, FluidThemeConfig } from "fluid-tailwind";

const config = {
  darkMode: ["class"],
  content: {
    files: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}',
    ],
    extract,
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fluid: ({ theme }) => ({
      defaultScreens: ['20rem', theme('screens.2xl')]
    }) satisfies FluidThemeConfig,
    extend: {
      fontFamily: {
        sans: [
          'var(--font-bowlby-sc)'
        ],
        mono: [
          'var(--font-dm-mono)'
        ]
      },
      colors: {
        'brand-blue': '#4876ff',
        'brand-lime': '#d9f154',
        'brand-navy': '#2e3192',
        'brand-orange': '#ff7347',
        'brand-pink': '#f7d0e9',
        'brand-purple': '#692e54',
        'brand-gray': '#fffdf9',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        squiggle: {
          '0%': {
            filter: 'url("#squiggle-0")'
          },
          '25%': {
            filter: 'url("#squiggle-1")'
          },
          '50%': {
            filter: 'url("#squiggle-2")'
          },
          '75%': {
            filter: 'url("#squiggle-3")'
          },
          '100%': {
            filter: 'url("#squiggle-4")'
          }
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        squiggle: 'squiggle .5s infinite',
      },
    },
  },
  plugins: [fluid, require("tailwindcss-animate")],
} satisfies Config;

export default config;