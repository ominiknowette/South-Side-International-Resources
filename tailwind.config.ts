import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#071422",
          DEFAULT: "#0B1F33", // Primary Navy
          800: "#0F2A45",
          700: "#123B56",     // Ocean Blue
          600: "#1B4F72",
        },
        ocean: {
          DEFAULT: "#123B56", // Ocean Blue
          hover: "#0D2E44",
          light: "#EBF3F8",
        },
        steel: {
          DEFAULT: "#64748B", // Steel Grey
          light: "#94A3B8",
          dark: "#475569",
          border: "#CBD5E1",
          muted: "#E2E8F0",
        },
        surface: {
          light: "#F8FAFC",  // Alternate Background
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-ibm-plex-sans)", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        none: "0",
        sm: "2px",
        DEFAULT: "3px",
        md: "4px",
      },
    },
  },
  plugins: [],
};

export default config;
