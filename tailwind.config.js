// Light "clinical" theme for the survey. The page markup was written for a dark theme, so the
// slate scale is inverted (950 = page canvas, 900 = card surface, 100 = headings) and the light
// accent shades used for text are darkened to stay readable on white.
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        slate: {
          50: '#0B1220', 100: '#0F1B2D', 200: '#1E293B', 300: '#334155', 400: '#52627A',
          500: '#64748B', 600: '#94A3B8', 700: '#CBD5E1', 800: '#E2E8F0', 900: '#FFFFFF', 950: '#F4F7FB',
        },
        emerald: { 100: '#D1FAE5', 200: '#065F46', 300: '#047857', 400: '#059669', 500: '#059669' },
        cyan:    { 100: '#164E63', 300: '#0E7490', 400: '#0891B2', 500: '#0891B2' },
        violet:  { 200: '#5B21B6', 300: '#6D28D9', 400: '#7C3AED', 500: '#7C3AED' },
        rose:    { 300: '#BE123C', 400: '#BE123C', 500: '#E11D48' },
        amber:   { 100: '#78350F', 300: '#B45309', 400: '#D97706', 500: '#D97706' },
        sky:     { 300: '#0369A1', 500: '#0284C7' },
        orange:  { 300: '#C2410C', 400: '#EA580C', 500: '#EA580C' },
        indigo:  { 300: '#4338CA', 500: '#4F46E5' },
      },
    },
  },
};
