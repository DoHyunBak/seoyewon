import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FAF7F2",
        surface: "#FFFFFF",
        text: "#222222",
        muted: "#6B6B6B",
        navy: "#1F2A44",
        green: "#3A7D5A",
        pink: "#F3B6C8",
        border: "#E8E2DA"
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)"
      },
      boxShadow: {
        card: "0 16px 40px rgba(31, 42, 68, 0.12)",
        soft: "0 10px 30px rgba(31, 42, 68, 0.08)"
      },
      fontFamily: {
        sans: ['Pretendard', '"Noto Sans KR"', "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
} satisfies Config;
