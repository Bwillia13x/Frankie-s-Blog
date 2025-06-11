import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Newsreader', 'Noto Sans', 'sans-serif'],
        display: ['Newsreader', 'serif'],
      },
      colors: {
        background: '#111b22',
        foreground: '#ffffff',
        border: '#243947',
        accent: '#1993e5',
        muted: '#93b3c8',
        'accent-hover': '#0d7cbf',
        'muted-dark': '#6b8ca1',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      typography: {
        invert: {
          css: {
            '--tw-prose-body': '#93b3c8',
            '--tw-prose-headings': '#ffffff',
            '--tw-prose-lead': '#93b3c8',
            '--tw-prose-links': '#1993e5',
            '--tw-prose-bold': '#ffffff',
            '--tw-prose-counters': '#93b3c8',
            '--tw-prose-bullets': '#243947',
            '--tw-prose-hr': '#243947',
            '--tw-prose-quotes': '#93b3c8',
            '--tw-prose-quote-borders': '#243947',
            '--tw-prose-captions': '#93b3c8',
            '--tw-prose-code': '#ffffff',
            '--tw-prose-pre-code': '#93b3c8',
            '--tw-prose-pre-bg': '#243947',
            '--tw-prose-th-borders': '#243947',
            '--tw-prose-td-borders': '#243947',
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
};
export default config;
