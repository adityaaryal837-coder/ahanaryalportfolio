/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'nepal-red': '#DC143C',
        'luxury-gold': '#D4AF37',
        'cinematic-black': '#0a0a0a',
      },
      fontFamily: {
        'cinematic': ['Inter', 'sans-serif'],
        'serif-elegant': ['Playfair Display', 'serif'],
      },
      animation: {
        'scroll-down': 'scrollDown 2s infinite',
        'reveal': 'reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards',
      },
      keyframes: {
        scrollDown: {
          '0%, 100%': { transform: 'translateY(0)', opacity: 1 },
          '50%': { transform: 'translateY(10px)', opacity: 0.5 },
        },
        reveal: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
