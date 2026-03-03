/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // main brand color
        accent: '#0CC8A8',
        'accent-hover': '#0ab596',

        // dark mode surfaces
        'dark-bg': '#0d1117',
        'dark-card': '#161b22',
        'dark-surface': '#21262d',
        'dark-border': '#1e2a3a',
        'dark-sidebar': '#0d1117',

        // light mode surfaces
        'light-bg': '#f5f6f8',
        'light-card': '#ffffff',
        'light-surface': '#f0f4f9',
        'light-border': '#e2e8ef',

        // text shades
        'text-primary': '#0f172a',
        'text-secondary': '#64748a',
        'text-muted': '#697282',

        // vulnerability severity levels
        severity: {
          critical: '#ef4444',
          high: '#f97216',
          medium: '#fbbf23',
          low: '#21c45d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
