/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spaceBg: "#050816",
        spaceCard: "#0D1B2A",
        cyanAccent: "#00D4FF",
        violetAccent: "#7B2FBE",
        neonGreen: "#00FF88",
        textMuted: "#8892A4",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        code: ["Fira Code", "monospace"],
      },
      animation: {
        'shimmer': 'shimmer 2.5s linear infinite',
        'orbit': 'orbit 20s linear infinite',
        'float-slow': 'floatSlow 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'draw-path': 'drawPath 2s ease-in-out forwards',
        'gradient-drift': 'gradientDrift 10s ease infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(0, 212, 255, 0.3)' },
          '50%': { boxShadow: '0 0 35px rgba(0, 212, 255, 0.7)' },
        },
        gradientDrift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
