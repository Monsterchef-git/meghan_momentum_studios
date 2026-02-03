import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Hippie/Bohemia
        terracotta: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e3e8e3',
          200: '#c7d2c7',
          300: '#a4b5a4',
          400: '#7d927d',
          500: '#5f7560',
          600: '#4a5d4b',
          700: '#3d4c3e',
          800: '#343f34',
          900: '#2d352e',
        },
        mustard: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        sunset: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        plum: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        display: ['var(--font-righteous)', 'cursive'],
      },
      backgroundImage: {
        'gradient-sunset': 'linear-gradient(135deg, #f97316 0%, #fb923c 50%, #fdba74 100%)',
        'gradient-earth': 'linear-gradient(135deg, #7d927d 0%, #bfa094 50%, #eab308 100%)',
        'gradient-psychedelic': 'linear-gradient(135deg, #a855f7 0%, #f97316 50%, #eab308 100%)',
        'radial-mandala': 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-soft': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'hippie': '0 4px 20px rgba(191, 160, 148, 0.3), 0 8px 40px rgba(249, 115, 22, 0.2)',
        'glow': '0 0 20px rgba(249, 115, 22, 0.4), 0 0 40px rgba(168, 85, 247, 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
