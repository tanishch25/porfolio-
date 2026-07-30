/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          50: '#f5f5f7',
          100: '#e1e1e6',
          200: '#c3c3cc',
          300: '#9d9da8',
          400: '#757582',
          500: '#565662',
          600: '#42424d',
          700: '#35353d',
          800: '#212128',
          900: '#0e0e12',
          950: '#070709',
        },
        platinum: '#f3f3f7',
        'cyber-yellow': '#ccff00',
        'electric-cyan': '#00f0ff',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
