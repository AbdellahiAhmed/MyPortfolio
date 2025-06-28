/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: '#ffffff',
        dark: '#0f172a',
        primary: {
          DEFAULT: '#7c3aed', // violet-600
          dark: '#8b5cf6',
          light: '#ddd6fe',
        },
        secondary: {
          DEFAULT: '#06b6d4', // cyan-500
          dark: '#22d3ee',
          light: '#a5f3fc',
        },
        accent: {
          DEFAULT: '#f59e0b', // amber-500
          dark: '#fbbf24',
          light: '#fef3c7',
        },
        muted: {
          DEFAULT: '#6b7280',
          dark: '#9ca3af',
          light: '#d1d5db',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      scrollMargin: {
        28: '7rem', // pour scroll-mt-28 dans les sections
      },
      transitionProperty: {
        width: 'width',
        spacing: 'margin, padding',
      },
    },
  },
  plugins: [],
};
