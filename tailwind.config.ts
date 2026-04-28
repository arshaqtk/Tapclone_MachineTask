import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#090d0a",
          surface: "#0f1a10",
          border: "#1a2e1c",
          green: "#22c55e",
          "green-muted": "#16a34a",
          text: "#ffffff",
          muted: "#9ca3af",
        },
      },
    },
  },
};

export default config;
