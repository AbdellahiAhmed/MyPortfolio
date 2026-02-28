/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Azizkhaldi.com exact color palette
        light: '#FFFFFF',
        dark: '#0F172A',
        surface: {
          light: '#F9FAFB',
          dark: '#1E293B',
        },
        text: {
          primary: {
            light: '#111827',
            dark: '#FFFFFF',
          },
          secondary: {
            light: '#6B7280',
            dark: '#94A3B8',
          },
          muted: {
            light: '#9CA3AF',
            dark: '#64748B',
          },
        },
        border: {
          light: '#E5E7EB',
          dark: '#334155',
        },
        accent: {
          DEFAULT: '#3b82f6',
          light: '#60a5fa',
          dark: '#2563eb',
        },
      },
      fontFamily: {
        display: ["'Righteous'", 'cursive'],
        decorative: ["'Megrim'", 'cursive'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'hero': ['6rem', { lineHeight: '1.1' }],
        'hero-md': ['5rem', { lineHeight: '1.1' }],
        'hero-sm': ['4rem', { lineHeight: '1.1' }],
      },
      letterSpacing: {
        'spaced': '0.4em',
        'wide-plus': '0.1em',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-slow': 'marquee 45s linear infinite',
        'wave': 'wave 7s ease-in-out infinite',
        'counter': 'counter 2s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        wave: {
          '0%, 100%': { d: 'path("M0,50 Q360,20 720,50 T1440,50 L1440,100 L0,100 Z")' },
          '50%': { d: 'path("M0,50 Q360,80 720,50 T1440,50 L1440,100 L0,100 Z")' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
};
