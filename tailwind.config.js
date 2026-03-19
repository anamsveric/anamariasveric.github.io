/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Comic Neue', 'Comic Sans MS', 'cursive'],
        body: ['Comic Neue', 'Comic Sans MS', 'cursive'],
        mono: ['Comic Neue', 'Comic Sans MS', 'cursive'],
      },
      colors: {
        cream: '#160840',
        ink: '#FFFFFF',
        accent: '#6B4FFF',
        muted: '#B8A0D8',
        surface: '#2A1060',
        dark: '#1E0A4E',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'line-grow': 'lineGrow 0.8s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        lineGrow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}
