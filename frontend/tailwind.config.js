/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B0F19',       // Obsidian Background
          card: '#111827',       // Elevated Card surface
          cardBorder: '#1F2937', // Subtle card borders
          primary: '#3B82F6',    // Bright Tech Blue
          secondary: '#8B5CF6',  // Vivid Electric Violet
          accent: '#06B6D4',     // Cyber Cyan
          slate: '#94A3B8',      // Text muted
          lightText: '#F8FAFC'  // Text crisp main
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['Poppins', 'sans-serif'],
        serif: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glow-primary': '0 0 25px -5px rgba(59, 130, 246, 0.4)',
        'glow-secondary': '0 0 25px -5px rgba(139, 92, 246, 0.4)',
        'glow-accent': '0 0 25px -5px rgba(6, 182, 212, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' }
        }
      }
    },
  },
  plugins: [],
}
