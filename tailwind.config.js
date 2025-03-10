import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './*.html', './src/**/*.html'],
  theme: {
    extend: {},
  },
  plugins: [
    // Use the imported daisyui plugin
    daisyui,
  ],
  daisyui: {
    themes: ['light', 'dark'],
  },
};
