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
        pink: "#FFD9E5",
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
      ,
      fontSize: {
        display: ['4.75rem', { lineHeight: '1.05' }],
        'h1-sm': ['4rem', { lineHeight: '1.06' }],
        h1: ['3rem', { lineHeight: '1.15' }],
        'h2-md': ['2.5rem', { lineHeight: '1.08' }],
        h2: ['2rem', { lineHeight: '1.08' }],
        lead: ['1.125rem', { lineHeight: '1.7' }]
      }
    }
  },
  plugins: []
} satisfies Config;
