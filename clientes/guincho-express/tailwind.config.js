/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta extraida da logo do cliente: laranja queimado, preto e prata/cromo
        primary: {
          DEFAULT: "#F06A0A",
          dark: "#D85800",
          light: "#FF8A2A",
        },
        ink: {
          DEFAULT: "#0B0B0C",
          soft: "#111113",
          card: "#17171A",
        },
        chrome: {
          DEFAULT: "#E4E4E4",
          muted: "#A6A6AD",
          dim: "#6E6E76",
        },
        wa: {
          DEFAULT: "#25D366",
          dark: "#1DA851",
        },
        star: "#FBBF24",
      },
      fontFamily: {
        display: ["Poppins", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        wrap: "1140px",
      },
    },
  },
  plugins: [],
};
